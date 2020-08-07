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

export default class CardAquatico extends Component {
  render() {
    return (
      <Card>
        <CardImage
          source={{
            uri:
              'https://i.pinimg.com/originals/82/4a/ce/824ace8669d672e8d9ba4990c418846f.jpg',
          }}
          title="Water Type"
        />
        <CardTitle
          subtitle="Water type pokemon having fun!"
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
