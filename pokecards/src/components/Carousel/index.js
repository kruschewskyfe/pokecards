import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import CardsLayout from '../Cards/CardsLayout';
const { width, height } = Dimensions.get('window')

export default class Carousel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Swiper
          style={styles.wrapper}
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
            <CardsLayout arrayTag={["pikachu", "dragonite", "aquatico", "eevee"]} />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{ uri: "https://s.aficionados.com.br/imagens/eevee-evolutions_cke.jpg" }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{ uri: "https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png" }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={{ uri: "https://i.pinimg.com/originals/82/4a/ce/824ace8669d672e8d9ba4990c418846f.jpg" }} />
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
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10
  }
})