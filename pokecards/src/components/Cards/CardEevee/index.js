import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
      <Card style={styles.borderClass}>
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

const styles = StyleSheet.create({
  borderClass:
  {
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden"
  },
})