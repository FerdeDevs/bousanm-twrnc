import { Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ArrowLeft, Link1, User } from 'iconsax-react-native'
import ImgBackground from '../../components/ImgBackground'
import { router } from 'expo-router'

const SettingsScreen = () => {
    var { width, height } = Dimensions.get("window")
    return (
        <View style={{ flex: 1 }}>
            <ImgBackground />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                {/* Header account */}
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 16 }}>
                        <View style={{ position: "relative" }}>
                            <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 100, overflow: "hidden", borderWidth: 2, borderColor: "#1d4ed8" }}>
                                <Image source={require('../../assets/images/profile.jpg')} style={{ width: "100%", height: "100%" }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name="camera" size={10} color="#fff" style={{ position: "absolute", bottom: 0, right: -8, zIndex: 10, backgroundColor: "#1d4ed8", padding: 5, borderRadius: 100 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, marginRight: 5 }}>Paul Ferdelson</Text>
                                <MaterialIcons name="verified" size={16} color="#1d4ed8" />
                            </View>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, marginTop: -4, color: "grey" }}>509 4820-3087</Text>
                        </View>
                    </View>
                </View>
                {/* End header account */}

                {/* Parametres account */}
                <View style={{ marginVertical: 16, }}>
                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, marginBottom: 8 }}>
                        Paramètres compte
                    </Text>

                    <View style={{
                        backgroundColor: "rgba(255,255,255,0.5)",
                        borderRadius: 16,
                        padding: 16,
                    }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="account-edit" size={26} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -6, color: "#000" }}>Modifier Information</Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#000", marginVertical: 12 }} />

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialIcons name="password" size={22} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -4, color: "#000" }}>Modifier Mot de passe</Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#000", marginVertical: 12 }} />

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name="finger-print" size={22} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -4, color: "#000" }}>Biometric Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* End parametres account */}

                {/* About bousanm */}
                <View style={{ marginVertical: 16, }}>
                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, marginBottom: 8 }}>
                        À propos
                    </Text>

                    <View style={{
                        backgroundColor: "rgba(255,255,255,0.5)",
                        borderRadius: 16,
                        padding: 16,
                    }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Feather name="info" size={22} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -4, color: "#000" }}>About Bousanm</Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#000", marginVertical: 12 }} />

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name="location-outline" size={22} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -4, color: "#000" }}>Our Office</Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#000", marginVertical: 12 }} />

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="questioncircleo" size={20} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -4, color: "#000" }}>FAQS</Text>
                            </View>

                            <View style={{ width: "100%", height: 1, backgroundColor: "#000", marginVertical: 12 }} />

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="sharealt" size={22} color="#000" />
                                <Text style={{ fontFamily: "poppins", fontSize: 14, marginLeft: 16, marginBottom: -4, color: "#000" }}>Share with friends</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* End about bousanm */}

                {/* Bottom Info */}
                <View style={{ marginVertical: 16, }}>
                    {/* Terms and Conditions */}
                    <TouchableOpacity style={{ marginBottom: 18, }}>
                        <Text style={{
                            fontFamily: "poppins", fontSize: 12, textAlign: "center", color: "#1d4ed8", textDecorationLine: 'underline'
                        }}>
                            Terms et conditions
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 45, backgroundColor: "#1d4ed8", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6 }}>
                            <AntDesign name="logout" size={14} color="#fff" />
                            <Text style={{ fontFamily: "poppins", fontSize: 14, color: "#fff", marginBottom: -3 }}>Déconnexion</Text>
                        </View>
                    </TouchableOpacity>


                </View>
                {/* End Bottom Info */}
            </ScrollView>
        </View>
    )
}

export default SettingsScreen