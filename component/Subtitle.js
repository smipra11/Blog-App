import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const  Subtitle =({children,numberOfLines = 2,size= 16}) =>{
    return (
       
            <Text numberOfLines ={numberOfLines} style={{fontSize:size}}>
                {children}
            </Text>

    )
}

export default Subtitle