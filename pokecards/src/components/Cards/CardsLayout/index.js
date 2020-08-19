import React, { Component, createElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CardPikachu from '../CardPikachu';
import CardDragonite from '../CardDragonite';
import CardEevee from '../CardEevee';
import CardAquatico from '../CardAquatico';

export default class CardsLayout extends Component {

  components = {
    pikachu: CardPikachu,
    dragonite: CardDragonite,
    eevee: CardEevee,
    aquatico: CardAquatico,
  };

  renderer(card) {
    if (typeof this.components[card.name] !== "undefined") {
      return React.createElement(this.components[card.name], {
        key: card.id,
        block: card
      });
    }
  }

  render() {
    const arrayItems = this.props.listCards.length
    const array1 = [this.props.listCards[0], this.props.listCards[1]]
    const array2 = [this.props.listCards[2]]
    const array3 = [this.props.listCards[2], this.props.listCards[3]]

    const cardperline = 2
    let offset = 0
    const numberOfLines = Math.floor(this.props.listCards.length / cardperline)
    console.log(numberOfLines)

    const listLines = []
    if (numberOfLines > 0) {
      for (let i = 0; i < numberOfLines; i++) {
        const lineX = [];
        for (let j = 0; j < cardperline; j++) {
          lineX.push(this.props.listCards[offset + j])
        }
        offset = offset + cardperline
        listLines.push(lineX)
      }
    }

    const missingCards = arrayItems % cardperline
    console.log(missingCards)
    if (arrayItems % cardperline != 0) {
      const lastLine = [];
      for (let i = 0; i < (arrayItems % cardperline); i++) {
        lastLine.push(this.props.listCards[numberOfLines * cardperline + i])
      }
      listLines.push(lastLine)
    }

    console.log(listLines)


    return (
      <>
        <View style={styles.mainContainer}>
          <View style={styles.inline}>
            {listLines[0].map(card => this.renderer(card))}
          </View>
          <View style={styles.inline}>
            {listLines.length > 1 ? listLines[1].map(card => this.renderer(card)) : <View />}
          </View>
        </View>
      </>
    )

    // switch (arrayItems) {
    //   case 1:
    //     return (
    //       <>
    //         <View style={styles.mainContainer}>
    //           <View style={styles.inline}>
    //             {this.props.listCards.map(card => this.renderer(card))}
    //           </View>
    //         </View>
    //       </>
    //     )
    //     break;
    //   case 2:
    //     return (
    //       <>
    //         <View style={styles.mainContainer}>
    //           <View style={styles.inline}>
    //             {this.props.listCards.map(card => this.renderer(card))}
    //           </View>
    //         </View>
    //       </>
    //     )
    //     break;
    //   case 3:
    //     return (
    //       <>
    //         <View style={styles.mainContainer}>
    //           <View style={styles.inline}>
    //             {array1.map(card => this.renderer(card))}
    //           </View>
    //           <View style={styles.inline}>
    //             {array2.map(card => this.renderer(card))}
    //           </View>
    //         </View>
    //       </>
    //     )
    //     break;
    //   case 4:
    //     return (
    //       <>
    //         <View style={styles.mainContainer}>
    //           <View style={styles.inline}>
    //             {array1.map(card => this.renderer(card))}
    //           </View>
    //           <View style={styles.inline}>
    //             {array3.map(card => this.renderer(card))}
    //           </View>
    //         </View>
    //       </>
    //     )
    //     break;
    // }


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
  },
})