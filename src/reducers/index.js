import { combineReducers } from 'redux' 
import modalReducers from './modalReducers'
import validationReducers from './validationReducers'
import tweetsReducer from './tweetsReducer'

export default combineReducers({
  modals: modalReducers,
  validations: validationReducers,
  tweets: tweetsReducer
})


// import { combineReducers } from "redux";
// import modalsReducer from "./modalsReducer";
// import validationsReducer from "./validationsReducer";
// import tweetsReducer from "./tweetsReducer";

// export default combineReducers({
//   modals: modalsReducer,
//   validations: validationsReducer,
//   tweets: tweetsReducer
// });