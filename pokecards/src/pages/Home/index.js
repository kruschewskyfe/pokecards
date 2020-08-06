import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Layout from '../../components/Cards/CardsLayout';
import Footer from '../../components/Footer';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLayout: 1
    };
  }

  render() {

    return (
      <>
        <View style={styles.container}>
          <View style={styles.body}>
            <Layout arrayTag={["pikachu", "dragonite", "lendario", "eevee"]} />
          </View>
          <Footer />
        </View>
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
  }
})
