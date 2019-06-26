import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

// Não pode ser criado vazio
const store = createStore(reducer, composer);

console.tron.log(store.getState());

export default store;
