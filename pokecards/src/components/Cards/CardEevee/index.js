import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

import { Container } from './styles';

export default class CardEevee extends Component {
  render() {
    return (
      <Card>
        <CardImage
          source={{
            uri:
              'https://s.aficionados.com.br/imagens/eevee-evolutions_cke.jpg',
          }}
          title="Eeveelutions"
        />
      </Card>
    );
  }
}
