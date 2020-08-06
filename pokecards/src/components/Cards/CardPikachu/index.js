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

class CardPikachu extends Component {
  render() {
    return (
      <Card>
        <CardImage
          source={{
            uri:
              'https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg?quality=90&strip=info&w=1024',
          }}
          title="Pikachu"
        />
        <CardTitle
          subtitle="This is Pikachu, Ash's best friend..."
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

export default CardPikachu;
