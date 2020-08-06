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

class CardEevee extends Component {
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
        <CardTitle
          subtitle="Eevees fo every one!!!"
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

export default CardEevee;
