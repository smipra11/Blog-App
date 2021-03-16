import React from 'react'
import {View,StyleSheet,StatusBar,ScrollView} from 'react-native'

const  Screen =({children})  =>{
    return (
       <ScrollView style={styles.container}>
           {children}

       </ScrollView>
    )
}

export default Screen

const styles= StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        marginTop:10,
        paddingHorizontal:15,
        backgroundColor:'#f7f3f3',
        flex:1
    }

})
