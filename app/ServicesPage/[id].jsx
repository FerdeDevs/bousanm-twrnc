import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ArrowLeft, Link1 } from 'iconsax-react-native'
import iconList from '../../data/services'
import { router, useLocalSearchParams } from 'expo-router'

const ServicesScreen = () => {
    const { id } = useLocalSearchParams();
    const serviceId = parseInt(id, 10);

    const item = iconList.find((services) => services.id === serviceId);

    var { width, height } = Dimensions.get('window')
    return (
        <View style={{ overflow: 'hidden', backgroundColor: '#f3f4f6', position: 'relative', width, height }}>
            <Image
                source={{ uri: item.uri }}
                style={{
                    width: width,
                    height: height / 2,
                    resizeMode: "cover"
                }}

            />
            <LinearGradient
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width, height
                }}
                colors={['transparent', '#fff', '#fff']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >

                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 10,
                        padding: 12,
                        borderRadius: 9999,
                        backgroundColor: '#1e3a8a'
                    }}
                >
                    <ArrowLeft size="22" color="#FFF" variant="TwoTone" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', top: '35%', padding: 16 }}>
                    {/* Top section */}
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 16
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: "poppinsBold",
                                marginBottom: 8
                            }}>
                                {item.name}
                            </Text>
                            <Text style={{
                                fontSize: 12,
                                color: '#6b7280',
                                marginTop: -8,
                                fontFamily: "poppinsMedium"
                            }}>
                                Depuis le 15 Aout 2024
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            padding: 12,
                            borderRadius: 9999,
                            backgroundColor: '#1e3a8a'
                        }}>
                            <Link1 size="22" color="#FFF" variant="TwoTone" />
                        </TouchableOpacity>
                    </View>
                    {/* Top section */}
                    <Text style={{
                        fontFamily: "poppinsMedium"
                    }} >
                        {item.desc}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({


    topSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16, // equivalent to mb-4
    },
    title: {
        fontSize: 20,
        fontFamily: "poppinsBold",
        marginBottom: 8
    },
    subtitle: {
        fontSize: 12,
        color: '#6b7280',
        marginTop: -8,
        fontFamily: "poppinsMedium",
    },
    linkButton: {

    },
});
export default ServicesScreen