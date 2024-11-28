import { View, Text, Image, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import ImgBackground from '../../components/ImgBackground'

const ScanCode = () => {
    var { width, height } = Dimensions.get("window");
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ImgBackground />
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: "poppins", color: "#000" }} >
                    Page en construction
                </Text>
                <ActivityIndicator size="small" color="#0000ff" />
                <Image source={require('../../assets/images/Work.png')} style={{ width: 300, height: 330, }} />
            </View>
        </View>
    )
}

export default ScanCode