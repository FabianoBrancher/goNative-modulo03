import React from 'react';

import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodosActions from '~/store/actions/todos';

// import { Container } from './styles';

const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text onPress={() => markAsCompleted(todo.id)} style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }} key={todo.id}>{todo.text}</Text>
    ))}
    <Button
      title="Adicionar Todo"
      onPress={addTodo}
    />

  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

// conceito que se chama High Order Component - HOC
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
