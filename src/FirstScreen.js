import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const FirstScreen = () => {
const navigation = useNavigation()
  const Data = [
    {
      name: "Saqib khan",
      cnic :"1122091090"
    },
    {
      name: "Saqib khan",
      cnic :"1122091090"
    }
    ,{
      name: "Saqib khan",
      cnic :"1122091090"
    },{
      name: "Saqib khan",
      cnic :"1122091090"
    }
  ]
  const ViewITem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <AntDesign name="stepforward" size={24} color="black" />
      <Image source={require("../assets/icon.png")} style={styles.img}/>
    </View>
  )
  return (
    <View>

        <TouchableOpacity onPress={() => navigation.navigate("secondScreen")}>

      <Text>FirstScreen</Text>

        </TouchableOpacity>
        <FlatList data={Data} renderItem={ViewITem}/>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({
  img:{
    height:RFValue(80),
    width:RFValue(80)
  }
})