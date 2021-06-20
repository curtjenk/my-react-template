import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

// const store = createStore(rootReducer, devToolsEnhancer({}));
const store = createStore(rootReducer,  applyMiddleware(thunk));

export default store;