import React from 'react'
import { View, Text } from 'react-native'
import BlogCard from "./BlogCard"

const  FeaturedNews = ({item})  =>{
    return (
        <BlogCard  item ={item}style={{marginVertical:15}}/>
       
    )
}
export default FeaturedNews
