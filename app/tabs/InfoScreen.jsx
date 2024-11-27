import { View, Text } from 'react-native'
import React from 'react'
import ImgBackground from '../../components/ImgBackground'

const InfoScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImgBackground />
            <Text>InfoScreen</Text>
        </View>
    )
}

export default InfoScreen