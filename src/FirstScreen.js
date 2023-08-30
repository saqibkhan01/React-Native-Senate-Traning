import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Header from './Component/Header';

const FirstScreen = () => {
  const navigation = useNavigation()
  const Data = [
    {
      name: "Saqib khan",
      cnic: "1122091090",
      detail:"This saqib"
    },
    {
      name: "Saqib khan",
      cnic: "1122091090",
      detail:"THis is rehmat"
    }
    , {
      name: "Saqib khan",
      cnic: "1122091090",
      detail:"THis is khan"
    }, {
      name: "Saqib khan",
      cnic: "1122091090",
      detail:"THis is ismaiel"
    }
  ]
  const ViewITem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate("secondScreen",{detailsss:item.detail})}>
      <View style={styles.row}>
        
      <Text>{item.name}</Text>
      <AntDesign name="stepforward" size={24} color="black" />
      </View>
      <Image source={require("../assets/icon.png")} style={styles.img} />
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={styles.container}>
      <Header title={"Title 1"}/>
      <FlatList data={Data} renderItem={ViewITem} />
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
  img: {
    height: RFValue(80),
    width: RFValue(80)
  },
  container:{
    padding:RFValue(30),
    // flex:1
  },
  card:{
    backgroundColor:"white",
    marginVertical:RFValue(10),
    elevation:10,
    padding:RFValue(10)
  },
  row:{
    justifyContent:"space-between",
    flexDirection:"row"
  }
})