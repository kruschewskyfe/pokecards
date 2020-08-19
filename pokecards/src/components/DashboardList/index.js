import React, { Suspense } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboards } from './dashboard';
import { ListItem, Left, Thumbnail, Body, Header, Footer, Right } from 'native-base';

const DashboardList = ({ navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <Header hasTabs>
          <Text style={styles.title}>Select your dashboard</Text>
        </Header>
        <Suspense>
          {Dashboards.map(item => (
            <ListItem thumbnail key={item.id} style={styles.list} onPress={() => navigation.navigate('Home', { cardList: item })}>
              <Left>
                <Thumbnail square source={{ uri: item.image }} style={styles.image} />
              </Left>
              <Body>
                <Text style={styles.text}>{item.name}</Text>
                <Text numberOfLines={1} style={styles.note}>{item.description}</Text>
              </Body>
            </ListItem>
          ))}
        </Suspense>
      </View>
      <Footer>
        <Button title="Voltar" style={styles.footer} onPress={() => navigation.goBack()} />
      </Footer>
    </>
  )
}

export default DashboardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  list: {
    alignSelf: "flex-start",
    paddingBottom: 20,
    marginRight: 40,
    padding: 20
  },
  image: {
    height: 160,
    width: 160
  },
  text: {
    fontSize: 40
  },
  note: {
    fontSize: 20
  },
  footer: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  title: {
    color: 'white',
    fontSize: 40
  }
})