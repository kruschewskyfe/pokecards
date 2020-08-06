import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    );
  }
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#212b9c',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})