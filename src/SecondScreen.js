import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SecondScreen = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}> 

      <Text>Go Back</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})