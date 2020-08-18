import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { Header, Footer, Left, Button, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

import CardsLayout from '../../components/Cards/CardsLayout';
import Menu from '../../components/Menu';

import { Dashboards } from '../../components/DashboardList/dashboard';

const myIcon = <Icon name="menu" size={40} color="#fff" />

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLayout: 1,
    };
    console.log(this.props.navigation.state);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {

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
        <CardsLayout listCards={this.props.listCards == null ? Dashboards[0].listCards : this.props.listCards} />
        <Footer>
          <Text style={styles.footer}>Footer</Text>
        </Footer>

      </>
    )
  }
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
