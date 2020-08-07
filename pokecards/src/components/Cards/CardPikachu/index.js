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
      <Card>
        <CardImage
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
  card: {
    flex: 1
  }
})