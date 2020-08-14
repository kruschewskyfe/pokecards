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

const CardAquatico = ({ name }) => (
  <Card style={styles.borderClass}>
    <CardImage
      name={name}
      type="cardAquatico"
      title="Water Type"
      source={{
        uri:
          'https://i.pinimg.com/originals/82/4a/ce/824ace8669d672e8d9ba4990c418846f.jpg',
      }}
    />
  </Card>
);

export default CardAquatico;

// export default class CardAquatico extends Component {
//   render() {
//     return (
//       <Card style={styles.borderClass}>
//         <CardImage
//           source={{
//             uri:
//               'https://i.pinimg.com/originals/82/4a/ce/824ace8669d672e8d9ba4990c418846f.jpg',
//           }}
//           title="Water Type"
//         />
//       </Card>
//     );
//   }
// };

const styles = StyleSheet.create({
  borderClass:
  {
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden"
  },
})