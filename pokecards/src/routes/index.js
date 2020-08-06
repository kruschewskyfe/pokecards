import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const AppNavigation = createStackNavigator();

const AppRoutes = () => (
    <AppNavigation.Navigator>
        <AppNavigation.Screen name="Home" component={Home} />
        <AppNavigation.Screen name="SignIn" component={SignIn} />
    </AppNavigation.Navigator>
);

export default AppRoutes;
