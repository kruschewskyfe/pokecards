import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

import { Container } from './styles';

export default class CardPikachu extends Component {
  render() {
    return (
      <Card style={styles.borderClass}>
        <CardImage style={{ flex: 1, borderRadius: 10 }}
          source={{
            uri:
              'https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg?quality=90&strip=info&w=1024',
          }}
          title="Pikachu"
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
    borderRadius: 10
  },
})