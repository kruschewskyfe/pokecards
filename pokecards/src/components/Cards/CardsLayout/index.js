import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CardPikachu from '../CardPikachu';
import CardDragonite from '../CardDragonite';
import CardEevee from '../CardEevee';
import CardAquatico from '../CardAquatico';

export default class CardsLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLayout: 1
    };
  }

  components = {
    pikachu: CardPikachu,
    dragonite: CardDragonite,
    eevee: CardEevee,
    aquatico: CardAquatico,
  };

  render() {

    const Card1 = this.components[this.props.arrayTag[0]];
    const Card2 = this.components[this.props.arrayTag[1]];
    const Card3 = this.components[this.props.arrayTag[2]];
    const Card4 = this.components[this.props.arrayTag[3]];

    return (
      <>
        <View style={{ flex: 1 }}>
          <View style={styles.inline}>
            <Card1 />
            <Card2 />
          </View>
          <View style={styles.inline}>
            <Card3 />
            <Card4 />
          </View>
        </View>
      </>
    )
  }

}

const styles = StyleSheet.create({
  inline: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    margin: 0
  }
})