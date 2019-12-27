import React from 'react';
import { Modal as ModalB } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseAddTweetModalAction } from '../actions/modalActions'


export default (props) => {
  const { children } = props

  // dispatcha para las acciones 

  const dispatch = useDispatch()

  const closeModal = state => dispatch(openCloseAddTweetModalAction(state))

  // para saber el valor actual del estado 

  const isOpenModal = useSelector(state => state.modals.stateModalAddTweets)


  return (
    <ModalB
      show={isOpenModal}
      onHide= { () => closeModal()}
      size="lg"
      aria-labelledby="modal"
      centered
    >
      {children}
    </ModalB>
  )
}