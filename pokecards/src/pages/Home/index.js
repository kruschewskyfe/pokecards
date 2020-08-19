import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { Header, Footer, Left, Button, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

import CardsLayout from '../../components/Cards/CardsLayout';
import Menu from '../../components/Menu';

import { Dashboards } from '../../components/DashboardList/dashboard';

const myIcon = <Icon name="menu" size={40} color="#fff" />

const Home = ({ route, navigation }) => {
  return (
    <>
      <Header androidStatusBarColor="#573ea8" hasTabs>
        <Left>
          <Button transparent>
            {myIcon}
          </Button>
        </Left>
        <Body>
          <Title style={styles.header}>Trading platform</Title>
        </Body>
      </Header>
      <Menu />
      <CardsLayout listCards={route.params == null ? Dashboards[4].listCards : route.params.cardList.listCards} />
      <Footer>
        <Text style={styles.footer}>Footer</Text>
      </Footer>

    </>
  )
}

export default Home;

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 70
  },
  footer: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 40
  }
})
