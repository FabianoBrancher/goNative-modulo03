import { createStore } from 'redux';

const INITIAL_STATE = [
  { id: 1, text: 'Fazer café', completed: false },
  { id: 2, text: 'Estudar react-native', completed: true },
  { id: 3, text: 'entender o redux', completed: false },
];

// Reducer
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text,
          completed: false,
        },
      ];
    case 'MARK_AS_COMPLETED':
      return [
        state.map(item => item.id === action.id),
        { completed: true },
      ];

    default:
      return state;
  }

  // if (action.type === 'ADD_TODO') {
  //   return [
  //     ...state,
  //     {
  //       id: Math.random(),
  //       text: action.text,
  //       completed: false,
  //     },
  //   ];
  // }

}

// Não pode ser criado vazio
const store = createStore(reducer);

export default store;
