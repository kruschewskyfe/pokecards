import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SectionList, ScrollView } from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import { DataTable } from 'react-native-paper';

import { ListAPI } from '../../../services/listItem';

const alertItemName = (item) => {
  alert(item)
}

console.log(ListAPI[0].data.equities.company[0].name)

const PortfolioCard = ({ type }) => {
  return (
    <Card style={styles.borderClass}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title sortDirection='ascending'>Description</DataTable.Title>
          <DataTable.Title numeric>Unreal. P/L</DataTable.Title>
          <DataTable.Title numeric>Value (CHF)</DataTable.Title>
        </DataTable.Header>
        {
          ListAPI.map(({ data: { equities } }, i) => {
            return (
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
            )
          })
        }
      </DataTable>
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
    borderColor: 'transparent',

    // Set border Radius.
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  header: {
    color: 'transparent',
    fontWeight: "bold",
    fontSize: 20
  }
})