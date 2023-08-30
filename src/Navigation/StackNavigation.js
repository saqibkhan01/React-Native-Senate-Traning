import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstScreen from '../FirstScreen'
import { NavigationContainer } from '@react-navigation/native'
import SecondScreen from '../SecondScreen'
import FormScreen from '../FormScreen'

const Stack = createStackNavigator()
const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='firstScreen' component={FirstScreen} options={{headerShown:false}}/>
            <Stack.Screen  name='secondScreen' component={SecondScreen} options={{headerShown:false}}/>
            <Stack.Screen  name='FormScreen' component={FormScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation