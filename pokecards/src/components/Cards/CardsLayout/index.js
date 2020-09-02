import React, { Component, createElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import WatchListCard from '../WatchListCard';
import NewsCard from '../NewsCard';
import OrdersCard from '../OrdersCard';
import ChartExample from '../Chart';
import InstrumentCard from '../InstrumentCard';
import PortfolioCard from '../PortfolioCard';

export default class CardsLayout extends Component {

  components = {
    watchlist: WatchListCard,
    news: NewsCard,
    order: OrdersCard,
    chart: ChartExample,
    instrument: InstrumentCard,
    portfolio: PortfolioCard
  };

  rendererInline(listLines) {
    if (listLines.length == 1 && listLines[0].length == 2) {
      console.log(listLines)
      return [
        React.createElement(
          View,
          {
            style: styles.inline
          },
          [
            listLines[0].map(card => this.rendererCards(card))
          ]
        ),
        React.createElement(
          View,
          {
            style: styles.inline
          },
          []
        )
      ]
    }
    else {
      return [
        listLines.map(listCards => {
          return React.createElement(
            View,
            {
              style: styles.inline
            },
            [
              listCards.map(card => this.rendererCards(card))
            ]
          );
        })
      ]
    }
  }

  rendererCards(card) {
    if (typeof this.components[card.name] !== "undefined") {
      return React.createElement(this.components[card.name], {
        key: card.id,
        block: card
      });
    }
  }

  render() {
    const arrayItems = this.props.listCards.length

    const cardperline = 2
    let offset = 0
    const numberOfLines = Math.floor(this.props.listCards.length / cardperline)

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
    if (arrayItems % cardperline != 0) {
      const lastLine = [];
      for (let i = 0; i < (arrayItems % cardperline); i++) {
        lastLine.push(this.props.listCards[numberOfLines * cardperline + i])
      }
      listLines.push(lastLine)
    }


    return (
      <>
        <View style={styles.mainContainer}>
          {this.rendererInline(listLines)}
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
    backgroundColor: '#ebebf0',
  },
  inline: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    margin: 0
  },
})