import { View, Text, Image, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import ImgBackground from './../components/ImgBackground';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
    var { width, height } = Dimensions.get("window");
    const images = [
        {
            id: "1",
            uri: "https://i.pinimg.com/736x/f5/5b/76/f55b7601a1b3add9aef364e6f9d1726e.jpg",
            title: "Image 1",
        },
        {
            id: "2",
            uri: "https://i.pinimg.com/736x/3c/ee/0d/3cee0d465663fd23dbe2fd85af15227f.jpg",
            title: "Image 2",
        },
        {
            id: "3",
            uri: "https://i.pinimg.com/736x/41/53/73/41537382eb2ce6d098e9880358e4a72b.jpg",
            title: "Image 3",
        },
        {
            id: "4",
            uri: "https://i.pinimg.com/736x/44/c8/6b/44c86bda021f8797dc6dba39e70b3840.jpg",
            title: "Image 4",
        },
    ];
    return (
        <View style={{ flex: 1, }}>
            <ImgBackground />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 16 }}>
                        <Pressable style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: "#e0e0e0", padding: 4, overflow: "hidden" }}>
                            <Image source={require('../assets/images/user.png')} style={{ width: "100%", height: "100%", marginTop: 6 }} />
                        </Pressable>
                        <View>
                            <Text style={{ fontFamily: "poppinsBold", fontSize: 14 }}>Hello 👋🏽, User Name</Text>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, marginTop: -4 }}>User Email</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#172554", width: "100%", borderRadius: 16, padding: 16, flexDirection: "row", justifyContent: "space-between", overflow: "hidden" }}>
                        <View style={{ height: 160, flexDirection: "column", justifyContent: "space-between" }}>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "#fff" }} >Solde Total</Text>
                                    <Pressable>
                                        <Ionicons name="eye" size={18} color="white" />
                                        {/* <Ionicons name="eye-off" size={18} color="white" /> */}
                                    </Pressable>
                                </View>
                                <View style={{ flexDirection: "row", gap: 4 }}>
                                    <Text style={{ fontFamily: "poppinsBold", fontSize: 22, color: "#fff" }} >2 646 453</Text>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#e0e0e0" }} >HTG</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 10, paddingVertical: 8, backgroundColor: "#047857", paddingHorizontal: 16 }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "#fff" }} >Sol</Text>
                                <View style={{ marginTop: -4, flexDirection: "row", gap: 4 }}>
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
                    <View style={{ marginBottom: 24 }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 6
                        }}>
                            <Text style={{ fontFamily: "poppinsBold", fontSize: 16 }}>
                                Partenaires
                            </Text>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: "row" }}>
                                {images.map((item) => (
                                    <Pressable key={item.id}>
                                        <Image
                                            source={{ uri: item.uri }}
                                            style={{
                                                width: width * 0.9,
                                                height: 180,
                                                borderRadius: 16,
                                                marginRight: 16,
                                                backgroundColor: "#f87171"
                                            }}
                                            resizeMode="cover"
                                        />
                                    </Pressable>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default HomeScreen