import React, { Component } from 'react';

import { View, Text } from 'react-native';

import api from '~/services/api';

import {
  Container,
  Input,
  Button,
  ButtonText,
  Error
} from './styles';

export default class login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    try {
      await api.get(`/users/${username}`);
      // deu certo

      // navegar para a rota que mostra os repositorios

    } catch (error) {
      // seta o erro
    }
  }

  render() {
    const { username } = this.state;
    return (
      <Container>
        <Input
          value={username}
          onChangeText={text => this.setState({ username: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}
