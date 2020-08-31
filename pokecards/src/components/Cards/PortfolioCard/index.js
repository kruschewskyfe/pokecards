import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-cards';
import { DataTable } from 'react-native-paper';
import FilterIcon from 'react-native-vector-icons/MaterialIcons';
import ViewWeekIcon from 'react-native-vector-icons/MaterialIcons';
import ExpandIcon from 'react-native-vector-icons/MaterialIcons';

import { ListAPI } from '../../../services/listItem';

const alertItemName = (item) => {
  alert(item)
}

console.log(ListAPI[0].data.equities.company[0].name)

const PortfolioCard = ({ type }) => {
  return (
    <Card style={styles.borderClass}>
      {
        ListAPI.map(({ id, description, data: { equities } }, i) => {
          return (
            <>
              <View style={{ flex: 0.2, flexDirection: "row", justifyContent: "space-between", margin: 5 }}>
                <View style={{ flex: 0.64 }}>
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>{id}</Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>{description}</Text>
                </View>
                <View style={{ flex: 0.3, flexDirection: "row" }}>
                  <FilterIcon name="filter-list" size={35} color="#573ea8" style={{ paddingRight: 25 }}></FilterIcon>
                  <ViewWeekIcon name="view-column" size={35} color="#573ea8" style={{ paddingRight: 25 }}></ViewWeekIcon>
                  <ExpandIcon name="view-stream" size={35} color="#573ea8" style={{ paddingRight: 25 }}></ExpandIcon>
                  <ExpandIcon name="zoom-out-map" size={35} color="#573ea8" style={{ paddingRight: 25 }}></ExpandIcon>
                </View>
              </View>
              <DataTable style={{ flex: 0.8 }}>
                <DataTable.Header>
                  <DataTable.Title sortDirection='ascending'>Description</DataTable.Title>
                  <DataTable.Title numeric>Unreal. P/L</DataTable.Title>
                  <DataTable.Title numeric>Value (CHF)</DataTable.Title>
                </DataTable.Header>
                <ScrollView>
                  <DataTable.Row key={i}>
                    <DataTable.Cell>EQUITIES</DataTable.Cell>
                    <DataTable.Cell numeric>{equities.totalPercentage}</DataTable.Cell>
                    <DataTable.Cell numeric>{equities.totalCompanies}</DataTable.Cell>
                  </DataTable.Row>
                  {
                    equities.company.map((company, j) => {
                      return (
                        <DataTable.Row key={j} onPress={() => alertItemName(company.name)}>
                          <DataTable.Cell>{company.name}</DataTable.Cell>
                          <DataTable.Cell numeric>{company.props.percentage}</DataTable.Cell>
                          <DataTable.Cell numeric>{company.props.value}</DataTable.Cell>
                        </DataTable.Row>
                      )
                    })
                  }
                </ScrollView>
              </DataTable>
            </>
          )
        })
      }
    </Card >
  )
}

export default PortfolioCard;

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
  header: {
    color: 'transparent',
    fontWeight: "bold",
    fontSize: 20
  }
})