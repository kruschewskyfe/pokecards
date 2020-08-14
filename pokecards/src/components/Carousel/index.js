import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, StyleSheet, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import CardsLayout from '../Cards/CardsLayout';
import { InlineCard, VerticalCard } from './styles';

const { width, height } = Dimensions.get('window')

export default class Carousel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Swiper
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <CardsLayout type="cardEevee" />
          </View>
          <View style={styles.slideDoisCards}>
            <CardsLayout type="cardPikachu" />
            <CardsLayout type="cardEevee" />
          </View>
          <View style={styles.slideDoisCards}>
            <CardsLayout type="cardEevee" />
            <VerticalCard>
              <CardsLayout type="cardDragonite" />
              <CardsLayout type="cardAquatico" />
            </VerticalCard>
          </View>
          <View style={styles.slide}>
            <InlineCard>
              <CardsLayout type="cardPikachu" />
              <CardsLayout type="cardDragonite" />
            </InlineCard>
            <InlineCard>
              <CardsLayout type="cardEevee" />
              <CardsLayout type="cardAquatico" />
            </InlineCard>
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
    flex: 1,
    borderWidth: 10,
    borderColor: 'transparent',
    borderRadius: 10
  },
  slideDoisCards: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: "row",
  },
  slideQuatroCards: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    padding: 5,
  }

})