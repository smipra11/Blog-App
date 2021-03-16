import React from 'react'
import { View, Text } from 'react-native'
import Horizontallist from "./Horizontallist"

const TechNews = ({data}) => {
    return (
        <Horizontallist  title="Tech News" data={data}/>
        
    )
}

export default TechNews
