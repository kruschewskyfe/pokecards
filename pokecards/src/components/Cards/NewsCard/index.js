import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import { Container, Header, Content, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const NewsCard = ({ type }) => (
  <Card style={styles.borderClass}>
    <CardImage
      type={type}
      title="Dragonite"
      source={{
        uri:
          'https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png',
      }}
    />
  </Card>
);

export default NewsCard;

const styles = StyleSheet.create({
  borderClass:
  {
    flex: 1,
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
})