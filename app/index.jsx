import { View, Text, ImageBackground, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { LinearGradient } from "expo-linear-gradient";
const index = () => {
    var { width, height } = Dimensions.get("window");
    return (


        <ImageBackground source={require('../assets/images/onboard.jpg')} style={{ flex: 1, position: "relative" }}>
            <LinearGradient
                style={{ flex: 1, paddingHorizontal: 10 }}
                colors={["transparent", "rgba(255,255,255,0.1)", "#172554"]}
            >
                <StatusBar hidden={true} />

                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 12 }} >
                    <Text style={{ fontFamily: "poppins", color: "white", fontSize: 20, marginBottom: 12 }}>
                        Welcome to Our App
                    </Text>
                    <Text style={{ fontFamily: "poppins", color: "rgba(255,255,255,0.6)", lineHeight: 24, marginBottom: 24 }} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                        laboriosam delectus accusantium rem temporibus ullam impedit rerum
                        recusandae ratione quibusdam!
                    </Text>
                    <Link href="AuthScreen" style={{ backgroundColor: "white", padding: 8, fontFamily: 'poppinsMedium', fontSize: 15, textAlign: "center", borderRadius: 10 }} >Get Started </Link>
                </View>
            </LinearGradient>

        </ImageBackground>
    )
}

export default index