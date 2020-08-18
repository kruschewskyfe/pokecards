import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Dashboard from '../components/DashboardList';

const AppNavigation = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppNavigation.Navigator headerMode="none">
      <AppNavigation.Screen name="Home" component={Home} />
      <AppNavigation.Screen name="SignIn" component={SignIn} />
      <AppNavigation.Screen name="Dashboard" component={Dashboard} />
    </AppNavigation.Navigator>
  )
}

export default AppRoutes;
