import React from 'react'
import { View, Text } from 'react-native'
import Horizontallist from "./Horizontallist"

const BreakingNews = ({data}) => {
    return (
        <Horizontallist  title="Breaking News" data={data}/>
        
    )
}

export default BreakingNews
