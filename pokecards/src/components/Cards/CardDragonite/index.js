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

class CardDragonite extends Component {
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
        <CardTitle
          subtitle="After 22 years, Ash finally catches a Dragonite..."
          style={{ color: '#FEB557' }}
        />
        <CardContent text="[+] information" />
        <CardAction separator inColumn>
          <CardButton
            onPress={() => {
              console.log('Deu')
            }}
            title="Click here"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    );
  }
};

export default CardDragonite;
