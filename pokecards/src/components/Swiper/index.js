import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import CardsLayout from '../Cards/CardsLayout';

export default class Carousel extends Component {
  render() {
    return (
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
            <CardsLayout arrayTag={["pikachu", "dragonite", "eevee", "aquatico"]} />
          </View>
          <View>
            <CardsLayout arrayTag={["pikachu", "dragonite", "eevee", "aquatico"]} />
          </View>
          <View>
            <CardsLayout arrayTag={["pikachu", "dragonite", "eevee", "aquatico"]} />
          </View>
        </Swiper>
      </View>
    )
  }
}