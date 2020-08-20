import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import { Container, Header, Content, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const CardDragonite = ({ type }) => (
  <Card style={styles.borderClass}>
    <CardImage
      type={type}
      title="Dragonite"
      source={{
        uri:
          'https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png',
      }}
    />
  </Card>
  // <Card style={styles.borderClass}>
  //   <CardItem>
  //     <Left>
  //       <Thumbnail source={{ uri: 'https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png' }} />
  //       <Body>
  //         <Text>NativeBase</Text>
  //         <Text note>GeekyAnts</Text>
  //       </Body>
  //     </Left>
  //   </CardItem>
  //   <CardItem cardBody>
  //     <Image source={{ uri: 'https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png' }} style={{ height: 200, width: null, flex: 1 }} />
  //   </CardItem>
  //   <CardItem>
  //     <Left>
  //       <Button transparent>
  //         <Icon active name="thumbs-up" />
  //         <Text>12 Likes</Text>
  //       </Button>
  //     </Left>
  //     <Body>
  //       <Button transparent>
  //         <Icon active name="chatbubbles" />
  //         <Text>4 Comments</Text>
  //       </Button>
  //     </Body>
  //     <Right>
  //       <Text>11h ago</Text>
  //     </Right>
  //   </CardItem>
  // </Card>
);

export default CardDragonite;

// export default class CardDragonite extends Component {
//   render() {
//     return (
//       <Card style={styles.borderClass}>
//         <CardImage
//           source={{
//             uri:
//               'https://cdn.ome.lt/UnpABMCI8J2fK5va3EGJtqP9ZQg=/1200x630/smart/extras/conteudos/dragonite-320.png',
//           }}
//           title="Dragonite"
//         />
//       </Card>
//     );
//   }
// };

const styles = StyleSheet.create({
  borderClass:
  {
    flex: 1,
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
})