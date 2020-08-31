import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import {
  Card,
  CardContent,
} from 'react-native-cards';
import Icon from 'react-native-vector-icons/Entypo';
import EtcIcon from 'react-native-vector-icons/AntDesign';
import * as shape from 'd3-shape'

import { ChartData } from './chartData';
import { ButtonItem, TextButton, CircleButton } from './styles';

const delayedIcon = <Icon name="back-in-time" size={22} color="#573ea8" />
const etcIcon = <EtcIcon name="ellipsis1" size={40} color="#573ea8" />

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ChartExample extends React.PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    return (
      <Card style={styles.borderClass}>
        {ChartData.map(item => (
          <CardContent key={item.id}>
            <Text style={styles.textChart}>ST {item.name} *</Text>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 0.2 }}>
              <Text style={{ fontSize: 0.01 * windowWidth, color: "#2126c2" }}>MSFT:NASDAQ   -- </Text>
              <Text style={{ fontSize: 0.01 * windowWidth, color: "#d90707", paddingLeft: 10 }}>FOCUS LIST</Text>
            </View>
            <View style={{ height: 0.07 * windowHeight, flex: 1 }}>
              <View style={{ flex: 0.5, paddingBottom: 10 }}>
                <Text style={styles.textNote}>Last Price - USD</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={styles.inline}>
                  <Text style={styles.textContent}>108.35</Text>
                  <Text style={{ fontSize: 0.015 * windowWidth, fontWeight: "bold", paddingLeft: 40 }}>3.2%</Text>
                  <Text style={{ fontSize: 0.015 * windowWidth, paddingLeft: 40 }}>{delayedIcon} Delayed</Text>
                </View>
                <View style={styles.inline}>
                  <ButtonItem>
                    <TextButton>Trade</TextButton>
                  </ButtonItem>
                  <CircleButton>
                    <TextButton>{etcIcon}</TextButton>
                  </CircleButton>
                </View>
              </View>
            </View>
            <View style={{ height: 0.075 * windowHeight, flex: 1 }}>
              <View style={styles.inline}>
                <Text style={styles.textNote}>Bid size</Text>
                <Text style={styles.textNote}>Bid</Text>
                <Text style={styles.textNote}>Ask</Text>
                <Text style={styles.textNote}>Ask size</Text>
                <Text style={styles.textNote}>Update</Text>
              </View>
              <View style={styles.inline}>
                <Text style={styles.textContent}>{item.bidSize}</Text>
                <Text style={styles.textContent}>{item.bid}</Text>
                <Text style={styles.textContent}>{item.ask}</Text>
                <Text style={styles.textContent}>{item.askSize}</Text>
                <Text style={styles.textContent}>{item.update}</Text>
              </View>
            </View>
            <View style={{ flex: 0.5 }}>
              <View style={styles.inline}>
                <Text style={styles.textNote}>Low</Text>
                <Text style={styles.textNote}>High</Text>
                <Text style={styles.textNote}>Prev. close</Text>
                <Text style={styles.textNote}>Open</Text>
                <Text style={styles.textNote}>Volume</Text>
              </View>
              <View style={styles.inline}>
                <Text style={styles.textContent}>{item.low}</Text>
                <Text style={styles.textContent}>{item.high}</Text>
                <Text style={styles.textContent}>{item.prevClose}</Text>
                <Text style={styles.textContent}>{item.open}</Text>
                <Text style={styles.textContent}>{item.volume}</Text>
              </View>
            </View>
            <View style={{ flex: 0.5 }}>
              <View style={styles.inline}>
                <Text style={styles.textChart}>1D</Text>
                <Text style={styles.textChart}>1W</Text>
                <Text style={styles.textChart}>1M</Text>
                <Text style={styles.textChart}>3M</Text>
                <Text style={styles.textChart}>6M</Text>
                <Text style={styles.textChart}>YTD</Text>
                <Text style={styles.textChart}>1Y</Text>
                <Text style={styles.textChart}>3Y</Text>
                <Text style={styles.textChart}>5Y</Text>
                <Text style={styles.textChart}>ALL</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <AreaChart
                style={{ flex: 2 }}
                data={data}
                contentInset={{ top: 10, bottom: 10 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
              >
                <Grid />
              </AreaChart>
            </View>
          </CardContent>
        ))}
      </Card>
    )
  }
}

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
    backgroundColor: "transparent"
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContent: {
    fontSize: 0.015 * windowWidth,
    fontWeight: "bold"
  },
  textChart: {
    fontSize: 0.015 * windowWidth,
    fontWeight: "bold",
    color: "#2126c2"
  },
  textNote: {
    fontSize: 0.015 * windowWidth
  }
})