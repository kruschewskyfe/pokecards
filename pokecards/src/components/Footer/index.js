import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { FooterStyle } from './styles';

class Footer extends Component {
  render() {
    return (
      // <>
      //   <View style={{ flex: 1 }}>
      //     <FooterStyle><Text>My fixed footer</Text></FooterStyle>
      //   </View>
      // </>
      <View style={styles.footer}>
        <Text>My Footer</Text>
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
  }
})