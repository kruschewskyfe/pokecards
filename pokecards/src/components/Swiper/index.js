import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import CardsLayout from '../Cards/CardsLayout';

export default class Carousel extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Swiper
            from={1}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
              prevPos: 'left',
              nextPos: 'right',
              PrevComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} size={48} />
                </TouchableOpacity>
              ),
              NextComponent: ({ onPress }) => (
                <TouchableOpacity onPress={onPress}>
                  <FontAwesomeIcon icon={faArrowCircleRight} size={48} />
                </TouchableOpacity>
              ),
            }}
          >
            <View>
              <CardsLayout arrayTag={["pikachu", "dragonite", "eevee", "lendario"]} />
            </View>
            <View>
              <CardsLayout arrayTag={["pikachu", "dragonite", "eevee", "lendario"]} />
            </View>
            <View>
              <CardsLayout arrayTag={["pikachu", "dragonite", "eevee", "lendario"]} />
            </View>
          </Swiper>
        </View>
        {/* <View style={{ flex: 1 }}>
          <Swiper
            vertical
            loop
            timeout={-2.5}
            controlsProps={{
              dotActiveStyle: { backgroundColor: 'red' },
              cellsContent: {
                'bottom-left': (<Text>SOME LOGO</Text>),
              }
            }}
          >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
              <Text>Slide 1</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,200,20,0.3)" }}>
              <Text>Slide 2</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(200,20,20,0.3)" }}>
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View> */}
      </View>
    )
  }
}