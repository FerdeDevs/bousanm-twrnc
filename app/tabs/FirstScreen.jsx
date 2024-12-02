import { View, Text, Image, ScrollView, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import ImgBackground from '../../components/ImgBackground'
import Ionicons from '@expo/vector-icons/Ionicons'
import Carousel from "react-native-reanimated-carousel"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import iconList from '../../data/services'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Notification, MoneyRecive, ScanBarcode, ArrowSwapHorizontal, MoneySend } from 'iconsax-react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'

const FirstScreen = () => {
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
    const services = [
        {
            id: "2",
            icon: <MoneyRecive size="32" color="#fff" variant="TwoTone" />,
            title: "Depot",
            notificationCount: 0,
        },
        {
            id: "1",
            icon: <MoneySend size="32" color="#fff" variant="TwoTone" />,
            title: "Retrait",
            notificationCount: 99,
        },
        {
            id: "3",
            icon: <ArrowSwapHorizontal size="32" color="#fff" variant="TwoTone" />,
            title: "Transfert",
            notificationCount: 0,
        },
        {
            id: "4",
            icon: <ScanBarcode size="32" color="#fff" variant="TwoTone" />,
            title: "QR Code",
            notificationCount: 10,
        },
    ];
    return (
        <View style={{ flex: 1, }}>
            <ImgBackground />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 16 }}>
                            <View style={{ position: "relative" }}>
                                <TouchableOpacity style={{ width: 55, height: 55, borderRadius: 100, overflow: "hidden", borderWidth: 2, borderColor: "#1d4ed8" }}>
                                    <Image source={require('../../assets/images/profile.jpg')} style={{ width: "100%", height: "100%" }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialIcons name="verified" size={18} color="#1d4ed8" style={{ position: "absolute", bottom: 0, right: -4, zIndex: 10 }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14 }}>Hello 👋🏽, Mesidor</Text>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, marginTop: -4, color: "grey" }}>#6534267</Text>
                            </View>
                        </View>
                        <View style={{ position: "relative", marginRight: 10 }}>
                            <View
                                style={{
                                    position: "absolute",
                                    left: 32,
                                    top: -5,
                                    zIndex: 10,
                                    backgroundColor: "red",
                                    paddingHorizontal: 4,
                                    paddingVertical: 1,
                                    borderRadius: 20,
                                    color: "rgba(255,255,255)"
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "poppins",
                                        fontSize: 10,
                                        color: "#fff",
                                        marginTop: 3,
                                    }}
                                >99+</Text>
                            </View>
                            <TouchableOpacity onPress={(() => router.push('../NotificationScreen'))} style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100,
                                backgroundColor: "#e0e0e0",
                                padding: 4,
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden"

                            }}>
                                <Notification size="20" color="#000" variant="TwoTone" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: "100%", backgroundColor: "#fff", borderRadius: 10, padding: 16, flexDirection: "row", justifyContent: "space-between", overflow: "hidden", position: "relative" }}>
                        <Image source={require('../../assets/images/card.jpg')} blurRadius={5} style={{ resizeMode: "cover", width: "115%", height: 200, position: "absolute" }} />
                        <View style={{ height: 140, flexDirection: "column", justifyContent: "space-between" }}>
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
                            <View style={{ borderRadius: 10, paddingVertical: 8, backgroundColor: "rgba(0,0,0,0.2)", paddingHorizontal: 16 }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "#fff" }} >Sol</Text>
                                <View style={{ marginTop: -4, flexDirection: "row", gap: 4 }}>
                                    <Text style={{ fontFamily: "poppinsBold", fontSize: 22, color: "#fff" }} >250</Text>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#e0e0e0" }} >HTG</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderRadius: 16, flexDirection: "column", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 22, color: "#fff", textAlign: "right" }} >Bousanm</Text>
                                <Text style={{ fontFamily: "poppins", fontSize: 14, color: "#fff", fontSize: 12, marginTop: -4, textAlign: "right" }} >BS</Text>

                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5 }} >
                                <View style={{ borderRadius: 10, paddingVertical: 3, borderColor: "rgba(255,255,255,0.2)", borderWidth: 1, borderStyle: "dashed", paddingHorizontal: 12 }}>
                                    <Text style={{ fontFamily: "poppins", fontSize: 11, color: "#FFF", textAlign: "right" }} >Part</Text>
                                    <View style={{ flexDirection: "row", gap: 8 }}>
                                        <FontAwesome5 name="hand-holding-usd" size={20} color="#fff" />
                                        <Text style={{ fontFamily: "poppinsMedium", fontSize: 18, color: "#fff", textAlign: "right" }} >3</Text>
                                    </View>
                                </View>
                                <View style={{ borderRadius: 10, paddingVertical: 3, borderColor: "rgba(255,255,255,0.2)", borderWidth: 1, borderStyle: "dashed", paddingHorizontal: 12 }}>
                                    <Text style={{ fontFamily: "poppins", fontSize: 11, color: "#FFF", textAlign: "right" }} >Touchée</Text>
                                    <View style={{ flexDirection: "row", gap: 8 }}>
                                        <FontAwesome6 name="sack-dollar" size={18} color="#fff" />
                                        <Text style={{ fontFamily: "poppinsMedium", fontSize: 18, color: "#fff", textAlign: "right" }} >39</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 16, paddingVertical: 1 }}>
                    <View style={{ marginBottom: 32, paddingHorizontal: 12 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            {services.map((item) => (
                                <Pressable key={item.id}>
                                    <View style={{
                                        width: 58,
                                        height: 58,
                                        backgroundColor: "#1e3a8a",
                                        borderRadius: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginBottom: 10
                                    }}>{item.icon}</View>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, textAlign: "center" }}>{item.title}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 3
                    }}>
                        <Text style={{ fontFamily: "poppinsMedium", fontSize: 12 }}>
                            Services
                        </Text>
                    </View>

                    <View style={{
                        padding: 16,
                        backgroundColor: "rgba(255, 255, 255,0.4)",
                        borderRadius: 10,
                        marginBottom: 32,
                        shadowRadius: 4
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {iconList.map((item) => (
                                <Pressable key={item.id} onPress={() => router.push(`../ServicesPage/${item.id}`)}>
                                    <View style={{
                                        width: 64,
                                        height: 64,
                                        backgroundColor: "#fff",
                                        borderRadius: 10,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>{item.icon}</View>

                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, textAlign: "center", marginTop: 5 }}>{item.name}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 3
                    }}>
                        <Text style={{ fontFamily: "poppinsMedium", fontSize: 12 }}>
                            Partenaires
                        </Text>
                    </View>
                    <Carousel
                        loop={true}
                        width={width}
                        height={width / 2}
                        snapEnabled={true}
                        autoPlay={true}
                        autoPlayInterval={2000}
                        scrollAnimationDuration={1000}
                        data={images}
                        style={{ marginBottom: 20 }}
                        // onSnapToItem={(index) => console.log("current index:", index)}
                        renderItem={({ item }) => (
                            <Image
                                source={{ uri: item.uri }}
                                style={{
                                    width: width * 0.9,
                                    height: 180,
                                    borderRadius: 10,
                                }}
                                resizeMode="cover"
                            />
                        )}
                    />
                    <View
                        style={{
                            backgroundColor: "rgba(255,255,255,0.5)",
                            borderRadius: 16,
                            padding: 16,
                            marginBottom: 16,
                            width: "100%",
                            justifyContent: "space-between",
                        }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#172554" }}>
                                    Dernière Transactions
                                </Text>
                                <Text style={{ fontFamily: "poppinsBold", fontSize: 18, color: "#172554" }}>
                                    1 600 HTG
                                </Text>
                            </View>
                            <View style={{ backgroundColor: "#172554", paddingHorizontal: 16, paddingVertical: 5, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#fff" }}>
                                    Depot
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#172554" }}>
                                12-07-2024
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            backgroundColor: "rgba(255,255,255,0.5)",
                            borderRadius: 16,
                            padding: 16,
                            marginBottom: 16,
                            width: "100%",
                            justifyContent: "space-between",
                        }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#172554" }}>
                                    Nombre de jours payé
                                </Text>
                                <Text style={{ fontFamily: "poppinsBold", fontSize: 18, color: "#172554" }}>
                                    13
                                </Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#172554" }}>
                                    sur
                                </Text>
                                <View style={{ backgroundColor: "#172554", width: 35, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#fff", marginTop: 3 }}>
                                        54
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#172554" }}>
                                <AntDesign name="arrowdown" size={12} color="#172554" />
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            backgroundColor: "rgba(255,255,255,0.5)",
                            borderRadius: 16,
                            padding: 16,
                            marginBottom: 16,
                            width: "100%",
                            justifyContent: "space-between",
                        }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#172554" }}>
                                    Nombre de jours non payé
                                </Text>
                                <Text style={{ fontFamily: "poppinsBold", fontSize: 18, color: "#172554" }}>
                                    43
                                </Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "#172554" }}>
                                    sur
                                </Text>
                                <View style={{ backgroundColor: "#172554", width: 35, height: 35, justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, color: "#fff", marginTop: 3 }}>
                                        10
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View>
                            <Text style={{ fontFamily: "poppinsMedium", fontSize: 10, color: "red" }}>
                                <AntDesign name="arrowup" size={12} color="red" /> 24 600 HTG
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default FirstScreen