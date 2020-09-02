import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-cards';
import { DataTable } from 'react-native-paper';
import SearchPlusIcon from 'react-native-vector-icons/MaterialIcons';
import ExpandIcon from 'react-native-vector-icons/MaterialIcons';

import { WatchlistAPI } from '../../../services/watchlist';

const WatchListCard = ({ type }) => {
  const [data] = useState({ data: [] })

  return (
    <Card style={styles.borderClass}>
      <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "space-between", margin: 5 }}>
        <View style={{ flex: 0.84 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>WATCHLIST     ALERTS</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>MY FAVORITES</Text>
        </View>
        <View style={{ flex: 0.15, flexDirection: "row" }}>
          <SearchPlusIcon name="zoom-in" size={35} color="#573ea8" style={{ paddingRight: 25 }}></SearchPlusIcon>
          <ExpandIcon name="zoom-out-map" size={35} color="#573ea8"></ExpandIcon>
        </View>
      </View>
      <DataTable style={{ flex: 0.8 }}>
        <DataTable.Header>
          <DataTable.Title sortDirection='ascending'>Description</DataTable.Title>
          <DataTable.Title numeric>Last Price</DataTable.Title>
          <DataTable.Title numeric>Change</DataTable.Title>
        </DataTable.Header>
        {
          WatchlistAPI.map(({ data }, i) => {
            return (
              <ScrollView>
                <DataTable.Row key={i}>
                  <DataTable.Cell>{data[i].description}</DataTable.Cell>
                  <DataTable.Cell numeric>{data[i].lastPrice}</DataTable.Cell>
                  <DataTable.Cell numeric>{data[i].change}</DataTable.Cell>
                </DataTable.Row>
              </ScrollView>
            )
          })
        }
      </DataTable>
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
})