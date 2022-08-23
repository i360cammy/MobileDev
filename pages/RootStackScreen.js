import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import PetProfileScreen from './PetProfileScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator>
        <RootStack.Screen name='Splash' component={SplashScreen} />
        <RootStack.Screen name='Login' component={LoginScreen} />
        <RootStack.Screen name='Register' component={RegisterScreen} />
        <RootStack.Screen name='Pet Profile' component={PetProfileScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;
