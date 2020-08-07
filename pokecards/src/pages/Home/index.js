import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { Header, Footer } from 'native-base';

import Layout from '../../components/Cards/CardsLayout';
import Carousel from '../../components/Swiper';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLayout: 1,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {

    return (
      <>
        <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
          <Text style={styles.text}>Header</Text>
        </Header>
        <Carousel />
        <Footer>
          <Text style={styles.text}>Footer</Text>
        </Footer>

      </>
    )
  }

}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
