import { createStore } from 'redux';

const INITIAL_STATE = ['Fazer café', 'Estudar react-native', 'entender o redux'];

// Reducer
function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }
  return state;
}

// Actions

// Adicionar um todo

// Marcar TODO como completo

// Não pode ser criado vazio
const store = createStore(reducer);

export default store;
