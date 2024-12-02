import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Redirect, router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { LinearGradient } from "expo-linear-gradient"
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
    // Onboarding =================================================================

    const [showOnboarding, setShowOnboarding] = useState(null)

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                // Vérifier si l'utilisateur a déjà ouvert l'application
                const hasLaunched = await AsyncStorage.getItem('hasLaunched');

                if (hasLaunched === null) {
                    // Premier lancement
                    setShowOnboarding(true);
                    await AsyncStorage.setItem('hasLaunched', 'true'); // Enregistrer le lancement
                } else {
                    // L'utilisateur a déjà ouvert l'application
                    setShowOnboarding(false);
                }
            } catch (error) {
                console.error("Erreur lors de l'accès à AsyncStorage :", error);
                setShowOnboarding('Erreur'); // En cas de problème, afficher un message par défaut
            }
        };

        checkFirstLaunch();
    }, []);
    // Afficher un indicateur de chargement pendant la vérification
    if (showOnboarding === null) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f2f2f2',
            }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
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
        return (
            <Redirect href="AuthScreen" />
        )
    }
}

export default index