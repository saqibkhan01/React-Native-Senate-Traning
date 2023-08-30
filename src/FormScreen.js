import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

const FormScreen = () => {
  const [name, setName] = useState(null)
  const [image, setImage] = useState(null)
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: false,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      console.log(result.canceled);
    }
  };
  return (
    <View style={{marginTop:40}}>
      <TextInput 
      onChangeText={(text) => setName(text)}
      style={styles.input}
      value={name}/>
      <Text style={{fontSize:30}}>{name}</Text>
      <TouchableOpacity onPress={pickImageFromCamera}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      <Image source={{uri: image}} style={{height:100, width:100}}/>
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:"red",
    height:RFValue(50)
  }
})