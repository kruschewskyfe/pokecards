import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
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
        <CardImage
          source={{
            uri:
              'https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg?quality=90&strip=info&w=1024',
          }}
          title="Pikachu"
        />
        {/* <Image source={{ uri: 'https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg?quality=90&strip=info&w=1024' }} /> */}
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
    overflow: "hidden",
    backgroundColor: "#312e38"
  },
})