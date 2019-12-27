const initialProps = {
  stateModalAddTweets: false
}

export default (state = initialProps, action) => {
  switch(action.type){
    case "STATE_ADD_TWEET_MODAL": 
    return {
      ...state,
      stateModalAddTweets: action.payload
    }
    default: 
    return state
  }
}