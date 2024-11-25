import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import ImgBackground from './../components/ImgBackground';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, }}>
            <ImgBackground />
            <ScrollView>
                <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                    <Pressable style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: "lightGrey", padding: 4, overflow: "hidden" }}>
                        <Image source={require('../assets/images/user.png')} style={{ width: "100%", height: "100%", marginTop: 6 }} />
                    </Pressable>

                    <View>

                    </View>
                </View>
                <Text>HomeScreen fs</Text>
            </ScrollView>
        </View>
    )
}

export default HomeScreen