import { createStore } from 'redux';

// Reducer
function reducer() {
  return ['Fazer café', 'Estudar react-native'];
}

// Não pode ser criado vazio
const store = createStore(reducer);

export default store;
