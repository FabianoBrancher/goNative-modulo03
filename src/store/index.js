import { createStore, compose, applyMiddleware } from 'redux';
import todos from './reducers/todos';

const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

// Não pode ser criado vazio
const store = createStore(todos, composer);

export default store;
