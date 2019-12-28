import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers'

let store: Store
if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeWithDevTools());
} else {
  store = createStore(rootReducer);
}

export const getStore = (): Store => {
  return store
}