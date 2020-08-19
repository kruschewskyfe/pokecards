import React, { Component } from 'react';
import { View, Text } from 'react-native';

const SignIn = ({ route, navigation }) => {
  const { cardList } = route.params

  console.log(cardList)

  return (
    <View>
      <Text>Olá Teste</Text>
    </View>
  )
}

export default SignIn;
