import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeft } from 'iconsax-react-native'
import ImgBackground from '../components/ImgBackground'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'

const UpdateProfile = () => {
    return (
        <View style={{ flex: 1, }}>
            <ImgBackground />
            <View style={{ paddingHorizontal: 16, marginVertical: 16 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft size={22} color="#000" variant="TwoTone" />
                </TouchableOpacity>

                <ScrollView showsVerticalScrollIndicator={false} >

                    <View >
                        <TextInput
                            placeholder="Nom " style={{
                                marginTop: 16,
                                padding: 12,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                                borderWidth: 1,
                                borderColor: '#E5E7EB',
                                borderRadius: 8,
                            }} />
                        <TextInput
                            placeholder="Prenom" style={{
                                marginTop: 16,
                                padding: 12,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                                borderWidth: 1,
                                borderColor: '#E5E7EB',
                                borderRadius: 8,
                            }} />
                        <TextInput
                            placeholder="Email " style={{
                                marginTop: 16,
                                padding: 12,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                                borderWidth: 1,
                                borderColor: '#E5E7EB',
                                borderRadius: 8,
                            }} />
                        <TextInput
                            placeholder="Sexe " style={{
                                marginTop: 16,
                                padding: 12,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                                borderWidth: 1,
                                borderColor: '#E5E7EB',
                                borderRadius: 8,
                            }} />
                        <TextInput
                            placeholder="Telephone " style={{
                                marginTop: 16,
                                padding: 12,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', fontFamily: 'poppins',
                                borderWidth: 1,
                                borderColor: '#E5E7EB',
                                borderRadius: 8,
                            }} />

                        <TouchableOpacity style={{ marginTop: 16, height: 45, backgroundColor: "#1E3A8A", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
                                <Text style={{ fontFamily: "poppins", fontSize: 14, color: "#fff", marginBottom: -3 }}>Modifier</Text>
                                <Ionicons name="checkmark-sharp" size={14} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default UpdateProfile