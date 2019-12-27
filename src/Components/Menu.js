import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import LogoRedux from '../assets/img/redux.png'
import { useDispatch } from 'react-redux'
import { openCloseAddTweetModalAction } from '../actions/modalActions'


export default () => {

  const dispatch = useDispatch()

  const openCloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state))

  const openModal = () => openCloseAddTweetModal(true)
  

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img 
            alt="logo de Redux"
            src ={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block align-top mr-4"
          />
          Tweets con Redux
        </Navbar.Brand>
        <Button variant="outline-success" onClick={openModal}>
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  )
}