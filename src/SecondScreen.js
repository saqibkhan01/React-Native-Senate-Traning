import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SecondScreen = ({route, navigation}) => {
    const {detailsss} = route.params
  return (
    <View style={{marginTop:30}}>
        <TouchableOpacity onPress={() => navigation.navigate("FormScreen")}> 

      <Text>GO TO Form Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})