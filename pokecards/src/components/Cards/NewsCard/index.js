import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, CardContent } from 'react-native-cards';
import ExpandIcon from 'react-native-vector-icons/MaterialIcons';

import { NewsAPI } from '../../../services/news';

const WatchListCard = ({ type }) => {
  return (
    <Card style={styles.borderClass}>
      <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "space-between", margin: 5 }}>
        <View style={{ flex: 0.95 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>NEWS</Text>
        </View>
        <View style={{ flex: 0.05, flexDirection: "row" }}>
          <ExpandIcon name="zoom-out-map" size={35} color="#573ea8"></ExpandIcon>
        </View>
      </View>
      <ScrollView style={{ flex: 0.8 }}>
        {
          NewsAPI.map((item) => {
            return (
              <View style={styles.news}>
                <View key={item.id}>
                  <View>
                    <Text style={{ fontSize: 16, color: "#242d8c" }}>{item.date}</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 24, paddingTop: 5 }}>{item.description}</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, color: "#242d8c", paddingTop: 15 }}>Read news</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </Card>
  )
}

export default WatchListCard;

const styles = StyleSheet.create({
  borderClass:
  {
    // Set border width.
    borderWidth: 10,

    // Set border Hex Color Code Here.
    borderColor: 'white',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white"
  },
  news: {
    borderWidth: 6,
    borderColor: 'transparent',
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ebebf0",
    padding: 15
  }
})