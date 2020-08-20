import React, { Suspense } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboards } from './dashboard';
import { ListItem, Left, Thumbnail, Body, Header, Footer, Right } from 'native-base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashboardList = ({ navigation }) => {

  return (
    <>
      <View style={styles.container}>
        <Header hasTabs>
          <Text style={styles.title}>Select your dashboard</Text>
        </Header>
        <Suspense>
          <View style={{ flexWrap: "wrap", paddingTop: 20 }}>
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
          </View>
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
    height: windowHeight / 6,
    width: windowWidth / 2.15,
    borderWidth: 10,
    borderColor: 'transparent',
    borderRadius: 10,
    margin: 5,
    backgroundColor: "transparent",
    elevation: 8
  },
  image: {
    height: 140,
    width: 140
  },
  text: {
    fontSize: 23
  },
  note: {
    fontSize: 16
  },
  footer: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  title: {
    color: 'white',
    fontSize: 40
  },
})