import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { validationsFormAddTweetAction } from '../actions/validateActions'
import { addTweetAction } from '../actions/tweetsActions'
import { openCloseAddTweetModalAction } from '../actions/modalActions'
import uuid from 'uuid/v4'
import moment from 'moment'


export default () => {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  // inicializar el dispatch y ejecucion de las acciones
  const dispatch = useDispatch()
  const errorForm = state => dispatch(validationsFormAddTweetAction(state))
  const addTweet = state => dispatch(addTweetAction(state));
  const closeModal = state => dispatch(openCloseAddTweetModalAction(state))

  // Obtener estado de la validacion del formulario 

  const errorForValue = useSelector(state => state.validations.errorFormAddTweet)
 
  const onChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    const { name, tweet } = formValue
   
    if(!name || !tweet ) {
      errorForm(true)
      console.log('todos los campos son obligatorios') 
    } else {
      errorForm(false)
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment()
      })
      closeModal(false)
    }
  }

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Escribe tu tweet..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
        {errorForValue && (
          <Alert variant="danger" className="mt-4">
            Todos los campos son obligatorios
          </Alert>
        )}
    </Form>
  )
}