import React from 'react';
import { Provider } from 'react-redux';

// Preciso colocar sempre antes da importação do Store
import '~/config/ReactotronConfig';

import store from '~/store';

import TodoList from '~/TodoList';

const App = () => <Provider store={store}><TodoList /></Provider>;

export default App;
