import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Redirect, router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { LinearGradient } from "expo-linear-gradient"
import { getItem } from '../utils/asyncStorage'

const index = () => {
    // Onboarding =================================================================

    const [showOnboarding, setShowOnboarding] = useState(null)

    const checkIfAlreadyOnborded = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            //hide onboarding
            setShowOnboarding(false)
        } else {
            //show onboarding
            setShowOnboarding(true)
        }
    }
    useEffect(() => {
        checkIfAlreadyOnborded();
    }, []);
    //End Onboarding ===============================================================

    if (showOnboarding) {
        return (
            <ImageBackground source={require('../assets/images/onboard.jpg')} style={{ flex: 1, position: "relative" }}>
                <LinearGradient
                    style={{ flex: 1, paddingHorizontal: 10 }}
                    colors={["transparent", "rgba(255,255,255,0.1)", "#172554"]}
                >
                    <StatusBar hidden={true} />

                    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 28 }} >
                        <Text style={{ fontFamily: "poppins", color: "white", fontSize: 20, marginBottom: 12 }}>
                            Bienvenu sur Bousanm
                        </Text>
                        <Text style={{ fontFamily: "poppins", color: "rgba(255,255,255,0.6)", lineHeight: 24, marginBottom: 24 }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                            laboriosam delectus accusantium rem temporibus ullam impedit rerum
                            recusandae ratione quibusdam!
                        </Text>

                        {/* Get Started Button */}
                        <TouchableOpacity onPress={() => router.push('AuthScreen')} style={{ height: 45, backgroundColor: "#fff", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
                                <Text style={{ fontFamily: "poppins", fontSize: 14, color: "#172554", marginBottom: -3 }}>Get Started</Text>
                                <AntDesign name="arrowright" size={18} color="#172554" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

            </ImageBackground>
        )
    } else {
        <Redirect href="/tabs" />
    }

}

export default index