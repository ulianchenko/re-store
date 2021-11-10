import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"
import reducer from "./reducers";


// const logMiddleware = (store) => (dispath) => (action) => {}  is the same as:
// const logMiddleware = (store, dispath) => (action) => 
const logMiddleware = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  return next(action);
};

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === "string") {
    return next({type: action});
  };

  return next(action);
};

// const stringEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     if (typeof action === "string") {
//       return originalDispatch({type: action});
//     };

//     return originalDispatch(action);
//   };

//   return store;
// };

// const logEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     console.log(action.type)
//     return originalDispatch(action);
//   };

//   return store;
// };

// in applyMiddleware() is important what the function will be as the first parametr, because the function in the first parametr covers the function in second parametr
const store = createStore(reducer, applyMiddleware(thunkMiddleWare, stringMiddleware, logMiddleware));

// const myAction = (dispatch) => {
//   setTimeout(() => dispatch({
//     type: "DELAYED_ACTION"
//   }), 2000)
// };

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: "DELAYED_ACTION"
  }), timeout)
};

store.dispatch(delayedActionCreator(3000));

export default store;