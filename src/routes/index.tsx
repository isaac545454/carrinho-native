import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Cart from '../pages/cart'
const Stack = createNativeStackNavigator()

export default function Routes() {
  return(
    <Stack.Navigator >
    <Stack.Screen 
    name="Home" 
    component={Home} 
    options={{
      headerShown: false
    }}/>

    <Stack.Screen 
    name="Cart" 
    component={Cart} 
    options={{
      headerTitle: "meu Carrinho"
    }}/>
  </Stack.Navigator>
  )
}