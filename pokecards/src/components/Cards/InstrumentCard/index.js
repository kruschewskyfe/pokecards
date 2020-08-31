import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const searchIcon = <Icon name="search" size={30} color="#573ea8" />

const InstrumentCard = ({ type, data }) => {
  return (
    <Card style={styles.borderClass}>
      {data
        ? <>
          <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "row" }}>
            <View><Text>INSTRUMENT</Text></View>
            <View><Text>{searchIcon}</Text></View>
          </View>
          <CardImage
            type={type}
            title="WatchList"
            source={{
              uri:
                'https://abrilmdemulher.files.wordpress.com/2017/08/filtro-pikachu-snapchat.jpg?quality=90&strip=info&w=1024',
            }}
          />
        </>
        : <>
          <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", paddingBottom: 20, margin: 5 }}>
            <View style={{ flex: 1 }}><Text style={{ fontSize: 22, fontWeight: "bold" }}>INSTRUMENT</Text></View>
            <View style={{ flex: 1, alignItems: "flex-end" }}><Text>{searchIcon}</Text></View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <View style={{ paddingBottom: 20 }}><Text><Icon name="search" size={60} color="#573ea8" /></Text></View>
            <View style={{ width: 240 }}><Text style={{ fontSize: 20 }}>Select an instrument in your positions or watchlist, or use the search feature to display an instrument.</Text></View>
          </View>
        </>
      }
    </Card>
  )
}

export default InstrumentCard;

const styles = StyleSheet.create({
  borderClass:
  {
    justifyContent: "center", alignItems: "center",
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'white',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white"
  },
})