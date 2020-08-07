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

export default class CardLendario extends Component {
  render() {
    return (
      <Card>
        <CardImage
          source={{
            uri:
              'https://antonioorlando.files.wordpress.com/2015/02/alllegendarypokemon.png',
          }}
          title="Legendary/Mytic Pokemon"
        />
        <CardTitle
          subtitle="Which one is your favorite?"
          style={{ color: '#FEB557' }}
        />
        <CardContent text="[+] information" />
        <CardAction separator inColumn>
          <CardButton
            onPress={() => {
              console.log('Deu');
            }}
            title="Click here"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    );
  }
}
