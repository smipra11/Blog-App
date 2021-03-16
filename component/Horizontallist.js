import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import Title from "./Title"

import Smallcard from "../component/smallcard"

const  Horizontallist =({title,data})  =>{
    return (
        <View >
             <Title size={20}>
         {title}
        </Title>
    <FlatList data={data}   
    keyExtractor ={item => item.id}
    horizontal
    showsHorizontalScrollIndicator ={false}
    renderItem = {({item})=><Smallcard  item ={item}/>}/>

        </View>
       

    )
}
export default Horizontallist

const styles = StyleSheet.create({})
