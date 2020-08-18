import React, { Component, createElement } from 'react';
import { View, StyleSheet } from 'react-native';

// import { cards } from '../indexCards';

// const CardsLayout = ({ type, ...props }) => createElement(cards.get(type), props);

// export default CardsLayout;
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

    const Card1 = this.components[this.props.listCards[0].props.type];
    const Card2 = this.components[this.props.listCards[1].props.type];
    const Card3 = this.components[this.props.listCards[2].props.type];
    const Card4 = this.components[this.props.listCards[3].props.type];

    return (
      <>
        <View style={styles.mainContainer}>
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
  mainContainer:
  {
    flex: 1,
    // Set content's vertical alignment.
    justifyContent: 'center',
    // Set content's horizontal alignment.
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
  },
  inline: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    margin: 0
  }
})