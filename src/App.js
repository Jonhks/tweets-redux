import React from 'react';
import { Container } from 'react-bootstrap'
import Menu from './Components/Menu'
import Modal from './Components/Modal'
import FormAddTweet from './Components/FormAddTweet'
import TweetsList from './Components/TweetsList'


// Redux
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">Tweets</h1>
        <TweetsList />
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
   </Provider>
  )
}

export default App;
