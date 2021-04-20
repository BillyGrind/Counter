import { createStore, combineReducers,applyMiddleware } from 'redux';
import CounterReducer from './Reducer/counterReducer'
import AddCartReducer from './Reducer/AddCartReducer'
import dataImgReducer from './Reducer/dataImgReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  AddCartReducer,
  CounterReducer,
  dataImgReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;