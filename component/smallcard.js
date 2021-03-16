import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import BlogCard from './BlogCard'
const {width} = Dimensions.get('window')

const  Smallcard =({item}) =>{
    return (
        <BlogCard  item ={item} style={styles.container} imagestyle ={styles.image}/>
    )
}

export default Smallcard

const styles = StyleSheet.create({
   container:{
    width:width/2,
    marginRight:15,
    height:200

   } ,
   image:{
       height:100
   }
})
