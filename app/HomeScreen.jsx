import { View, Text, Image, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import ImgBackground from './../components/ImgBackground';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
    var { width, height } = Dimensions.get("window");

    return (
        <View style={{ flex: 1, }}>
            <ImgBackground />
            <ScrollView>
                <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 16 }}>
                        <Pressable style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: "#e0e0e0", padding: 4, overflow: "hidden" }}>
                            <Image source={require('../assets/images/user.png')} style={{ width: "100%", height: "100%", marginTop: 6 }} />
                        </Pressable>
                        <View>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 14 }}>Hello 👋🏽, User Name</Text>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, marginTop: -4 }}>User Email</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#201d92", width: "100%", borderRadius: 16, padding: 16, flexDirection: "row", justifyContent: "space-between", overflow: "hidden" }}>
                        <View style={{ height: 160, flexDirection: "column", justifyContent: "space-between" }}>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "#fff" }} >Solde Total</Text>
                                    <Pressable>
                                        {/* <Ionicons name="eye" size={18} color="white" /> */}
                                        <Ionicons name="eye-off" size={18} color="white" />
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: "row", gap: 4 }}>
                                    <Text style={{ fontFamily: "poppinsBold", fontSize: 22, color: "#fff" }} >2 646 453</Text>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#e0e0e0" }} >HTG</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 10, paddingVertical: 8, backgroundColor: "#2118bb", paddingHorizontal: 16 }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "#fff" }} >Sol</Text>
                                <View style={{ marginTop: -4, flexDirection: "row", gap: 4, justifyContent: "flex-end" }}>
                                    <Text style={{ fontFamily: "poppinsBold", fontSize: 22, color: "#fff" }} >250</Text>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#e0e0e0" }} >HTG</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderRadius: 16, flexDirection: "column", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#fff", textAlign: "right" }} >Main</Text>
                                <Text style={{ fontFamily: "poppinsBold", fontSize: 22, color: "#fff", textAlign: "right" }} >3</Text>
                            </View>
                            <View >
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#FFF", textAlign: "right" }} >Main Touchéee</Text>
                                <Text style={{ fontFamily: "poppinsBold", fontSize: 22, color: "#fff", textAlign: "right" }} >3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                    <Text>HomeScreen fs</Text>
                </View>

            </ScrollView>
        </View>
    )
}

export default HomeScreen