import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FirstScreen from '../FirstScreen'
import { NavigationContainer } from '@react-navigation/native'
import SecondScreen from '../SecondScreen'

const Stack = createStackNavigator()
const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='firstScreen' component={FirstScreen}/>
            <Stack.Screen  name='secondScreen' component={SecondScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation