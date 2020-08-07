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

export default class CardDragonite extends Component {
  render() {
    return (
      <Card>
        <CardImage
          source={{
            uri:
              'https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png',
          }}
          title="Dragonite"
        />
      </Card>
    );
  }
};

