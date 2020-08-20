import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, ButtonItem, TextButton, GroupButtons } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconNotification from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const searchIcon = <Icon name="search" size={30} color="#573ea8" />
const screenIcon = <Icon name="binoculars" size={30} color="#573ea8" />
const dashboardIcon = <Icon name="th" size={30} color="#573ea8" />
const notificationsIcon = <IconNotification name="notifications" size={30} color="#573ea8" />

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <GroupButtons>
        <ButtonItem><TextButton>{searchIcon} Search</TextButton></ButtonItem>
        <ButtonItem><TextButton>{screenIcon} Screen</TextButton></ButtonItem>
        <ButtonItem onPress={() => { navigation.navigate('Dashboard') }}><TextButton>{dashboardIcon} Dashboard</TextButton></ButtonItem>
        <ButtonItem><TextButton>{notificationsIcon} Notifications</TextButton></ButtonItem>
      </GroupButtons>
      <ButtonItem color end><TextButton color>New trade</TextButton></ButtonItem>
    </Container>
  );
}

export default Menu;