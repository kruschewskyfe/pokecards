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

const WatchListCard = ({ type }) => {
  return (
    <Card style={styles.borderClass}>
      <CardImage
        type={type}
        title="WatchList"
        source={{
          uri:
            'https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg?quality=90&strip=info&w=1024',
        }}
      />
    </Card>
  )
}

export default WatchListCard;

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
    backgroundColor: "transparent"
  },
})