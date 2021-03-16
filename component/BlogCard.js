import React from 'react'
import { View, StyleSheet ,Image} from 'react-native'
import Title from "./Title"
import Subtitle from "./Subtitle"

const BlogCard = ({style,imagestyle,item}) => {
    const{thumbnail,title,desc} =item
    return (
        <View style={[styles.container,style]}>
            <Image  style={[styles.image,imagestyle]} source= {{uri:thumbnail}}/>
            <View style={styles.contentcontainer}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
            
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        width: '100%',
        height:300,
        borderRadius:8,
        backgroundColor:'#fff',
        overflow:'hidden'

    },
    image:{
        width: '100%',
        height:200
    },
    contentcontainer:{
        padding:5

    }


})


export default BlogCard


