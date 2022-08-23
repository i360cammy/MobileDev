//Import libraries and pages
import React, { useState, useMemo, useEffect, useReducer } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import RootStackScreen from './pages/RootStackScreen';

import { AuthContext } from './components/context';

import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './pages/HomeScreen'

//Create stack for navigation
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

import DrawerContent from './pages/DrawerContent';

export default function App() {

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  console.log(loginState)

  const authContext = useMemo(() => ({
    signIn: async(userName, password) => {
      let userToken;
      userToken = null;
      if(userName == 'user' && password == 'pass') {
        userToken = 'token'
        try {
          await AsyncStorage.setItem('userToken', userToken)
        } catch(err) {
          console.log(err);
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken})
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(err) {
        console.log(err);
      }
      dispatch({type: 'LOGOUT'})
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken', userToken)
      } catch(err) {
        console.log(err);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000);
  }, []);

  if(loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken !== null ? (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Stack.Screen name='Home' component={HomeScreen} />
        
      </Drawer.Navigator> 
      )
      :
      <RootStackScreen />
      }
       
    </NavigationContainer>
    </AuthContext.Provider>
  );
}