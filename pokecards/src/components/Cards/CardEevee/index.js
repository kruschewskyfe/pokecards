import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const CardEevee = ({ type }) => (
  <Card style={styles.borderClass}>
    <CardImage
      type={type}
      title="Eeveelutions"
      source={{
        uri:
          'https://s.aficionados.com.br/imagens/eevee-evolutions_cke.jpg',
      }}
    />
  </Card>
)

export default CardEevee;
// export default class CardEevee extends Component {
//   render() {
//     return (
//       <Card style={styles.borderClass}>
//         <CardImage
//           source={{
//             uri:
//               'https://s.aficionados.com.br/imagens/eevee-evolutions_cke.jpg',
//           }}
//           title="Eeveelutions"
//         />
//       </Card>
//     );
//   }
// }

const styles = StyleSheet.create({
  borderClass:
  {
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
})