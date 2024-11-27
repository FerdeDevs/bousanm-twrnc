import { View, Text, TextInput, ScrollView, StatusBar, Pressable, Alert, Button } from 'react-native'
import React from 'react'
import ImgBackground from '../components/ImgBackground'
import { Link, router } from 'expo-router'

const AuthScreen = () => {

    return (
        <View style={{ flex: 1, }}>
            <StatusBar hidden={false} />
            <ImgBackground />
            <View style={{ paddingHorizontal: 14, flex: 1, justifyContent: "center" }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 18, textAlign: "center" }}>Connectez-Vous 🤝🏾  </Text>

                    <Text style={{ fontFamily: "poppins", textAlign: "center", color: "rgba(0,0,0,0.5)" }} >
                        Vous devez-vous inscrire, si vous navez pas encore de compte
                    </Text>
                </View>
                <View >
                    <TextInput
                        placeholder="Nom Utilisateur" style={{
                            marginTop: 16,
                            padding: 12,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                            borderWidth: 1,
                            borderColor: '#E5E7EB',
                            borderRadius: 8,
                        }} />
                    <TextInput
                        placeholder="Mot de passe"
                        secureTextEntry
                        style={{
                            marginTop: 16,
                            padding: 12,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                            borderWidth: 1,
                            borderColor: '#E5E7EB',
                            borderRadius: 8,
                        }} />
                    <Link
                        // href="HomeScreen"
                        href="tabs"
                        style={{ backgroundColor: "#1E3A8A", padding: 8, fontFamily: 'poppinsMedium', fontSize: 15, textAlign: "center", borderRadius: 8, marginTop: 16, color: "#FFFFFF" }}
                    >
                        Connectez Vous
                    </Link>

                    <View style={{ flexDirection: "row", width: "99%" }}>
                        <Text style={{ fontFamily: 'poppins', marginTop: 16, }}>
                            Vous n'avez pas de compte?
                        </Text>
                        <Pressable >
                            <Text style={{ fontFamily: 'poppins', marginTop: 16, color: "#1E3A8A", textDecorationLine: 'underline' }}>
                                Inscrivez-vous ici
                            </Text>
                        </Pressable>

                    </View>
                </View>

            </View>
        </View >
    )
}

export default AuthScreen