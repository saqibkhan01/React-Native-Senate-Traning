import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from './Context/AuthContext'
import { allQuestion, submitQuestion } from './APi'

const SecondScreen = ({route, navigation}) => {
    const {name} = useContext(AuthContext)
    const [myData, setMyData] = useState(null)

    const [mover, setMover] = useState(null)
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)



    const {detailsss} = route.params
    const getData = async () => {
        try {
            const response = await allQuestion()
            setMyData(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    },[])

    const Submit = async () => {
        const data = {
            Mover:mover,
            Title:title,
            Description: description
        }
        console.log("Datass", data);
        try {
            const response = await submitQuestion(data)
            console.log("Response Submit", response.data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <View style={{marginTop:30}}>
        
        <TextInput value={mover} onChangeText={(text) => setMover(text)} style={styles.input}/>
        <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input}/>
        <TextInput value={description} onChangeText={(text) => setDescription(text)} style={styles.input}/>
        <TouchableOpacity onPress={Submit}> 
          <Text>{name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({
    input:{
        borderColor:"red",
        borderWidth:2,
        height:50
    }
})