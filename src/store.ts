import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers'

let store: any
if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools());
} else {
    store = createStore(rootReducer);
}

export const getStore = () => {
    return store
}