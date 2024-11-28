import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import ImgBackground from '../../components/ImgBackground'

const InfoScreen = () => {
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
        <View style={{ flex: 1 }}>
            <ImgBackground />
            <View style={{ paddingHorizontal: 16 }}>
                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, marginBottom: 16 }}>
                        Client PUB
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 50 }} >
                    {
                        images.map((image) => (
                            <View key={image.id} style={{ marginBottom: 16 }}>
                                <TouchableOpacity>
                                    <Image source={{ uri: image.uri }} style={{ width: "100%", height: 200, borderRadius: 10 }} />
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
                {/* <View
                    style={{
                        backgroundColor: "rgba(255,255,255,0.5)",
                        borderRadius: 16,
                        padding: 16,
                        marginBottom: 16,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 }
                    }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <TouchableOpacity style={{ width: 35, height: 35, borderRadius: 100, overflow: "hidden", borderWidth: 2, borderColor: "#1d4ed8" }}>
                                <Image source={require('../../assets/images/profile.jpg')} style={{ width: "100%", height: "100%" }} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontFamily: "poppins", fontSize: 14 }}>Mesidor MACKENSON</Text>
                                <Text style={{ fontFamily: "poppins", fontSize: 10, marginTop: -4, color: "grey" }}>12 Aout 2012</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Feather name="more-vertical" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "100%", height: 1, backgroundColor: "#000", marginVertical: 12 }} />
                </View> */}
            </View>
        </View>
    )
}

export default InfoScreen