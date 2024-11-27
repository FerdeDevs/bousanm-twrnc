import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Foundation from '@expo/vector-icons/Foundation';
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Text, View } from 'react-native'

const TabsLayout = () => {
    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: 'relative',
            // bottom: 0,
            // left: 10,
            // right: 10,
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 0,//android
            shadowOpacity: 0,//iphone
            height: 50,
            paddingTop: 10,
            paddingHorizontal: 20,
        },
    }
    return (
        <Tabs screenOptions={screenOptions}>
            <Tabs.Screen
                name="FirstScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <AntDesign name="home" size={20} color={focused ? "#1e3a8a" : "grey"} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="InfoScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Foundation name="burst-new" size={26} color={focused ? "#1e3a8a" : "grey"} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="ScanCode"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: "absolute", width: 65, height: 65, borderRadius: 200, marginHorizontal: 28, flexDirection: "row", alignItems: "center", justifyContent: "center", borderColor: "#1e3a8a", borderWidth: 1, backgroundColor: "#1d4ed8", elevation: 2, shadowColor: "#000", shadowOpacity: 2, }}>
                            <MaterialCommunityIcons name="line-scan" size={30} color="#FFF" />
                            {/* <View style={[{ width: 16, height: 1.5, marginTop: 4 }, focused ? { backgroundColor: "#1e3a8a" } : { backgroundColor: "transparent" },]} /> */}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="HistoricScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialCommunityIcons name="history" size={26} color={focused ? "#1e3a8a" : "grey"} />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="SettingsScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <AntDesign name="setting" size={23} color={focused ? "#1e3a8a" : "grey"} />
                        </View>
                    ),
                }}
            />
        </Tabs>
    )
}

export default TabsLayout