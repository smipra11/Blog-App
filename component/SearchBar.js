import React from 'react'
import {View,Text,TextInput,StyleSheet}from 'react-native'

export default function SearchBar() {
    return (
        <View style ={styles.container}>
            <TextInput style={styles.input} placeholder= "search here"/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
       width:'100%',
       height:50,
       backgroundColor:'white',
       borderRadius:8,
       justifyContent:'center',
       marginTop:30



    },
    input:{
        width:'100%',
        height:'100%',
        fontSize:16,
        paddingLeft:8,
        
    }

    


})
