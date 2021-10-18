import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState , saveState } from "./localStorage";


const middleware = [thunk];
const persistedState = loadState();


const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(
     store.getState()
  );
});


// store.subscribe(throttle(() => {
  
//   saveState({golbState : store.getState()});
 
// }, 1000));

export default store;