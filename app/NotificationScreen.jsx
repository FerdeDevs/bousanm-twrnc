import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeft, Notification } from 'iconsax-react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import ImgBackground from '../components/ImgBackground'
import { router } from 'expo-router';

const NotificationScreen = () => {
    const filter = [
        'Tous',
        'lus',
        'non lus',
        'en attente',
        'réussi',
        'échoué'
    ]
    const [change, setChange] = useState('Tous')
    const data = [
        {
            id: 1,
            title: 'Notification 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio, omnis doloremque mollitia animi dignissimos quia corrupti? Vero, magnam eveniet?',
            status: 'non lus',
            createdAt: '2023-03-15T10:15:30',
        },
        {
            id: 2,
            title: 'Notification 2',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, vero?',
            status: 'en attente',
            createdAt: '2023-03-16T10:15:30',
        },
        {
            id: 3,
            title: 'Notification 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, vero?',
            status: 'réussi',
            createdAt: '2023-03-17T10:15:30',
        },
        {
            id: 4,
            title: 'Notification 4',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, vero?',
            status: 'réussi',
            createdAt: '2023-03-18T10:15:30',
        },
        {
            id: 5,
            title: 'Notification 5',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, vero?',
            status: 'réussi',
            createdAt: '2023-03-19T10:15:30',
        }
    ]
    return (
        <View style={{ flex: 1, }}>
            <ImgBackground />

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <ArrowLeft size={22} color="#000" variant="TwoTone" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="ellipsis1" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.horizontalScroll}
                    >
                        {filter.map((item, index) => {
                            const isActive = item === change;
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setChange(item)}
                                    style={styles.filterButton}
                                >
                                    <Text style={isActive ? styles.activeText : styles.inactiveText}>
                                        {item}
                                    </Text>
                                    {isActive && <View style={styles.activeIndicator}></View>}
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.dataList}>
                        {data.map((item, index) => (
                            <View key={index} style={styles.dataCard}>
                                <View style={styles.cardHeader}>
                                    <View style={styles.iconContainer}>
                                        <Notification
                                            size={20}
                                            color="rgb(239, 68 ,68)"
                                            variant="TwoTone"
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.cardTitle}>{item.title}</Text>
                                        <Text style={styles.cardDate}>{item.createdAt}</Text>
                                    </View>
                                </View>
                                <Text style={styles.cardContent}>{item.content}</Text>
                                <View style={styles.cardFooter}>
                                    {/* Add footer actions if needed */}
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        paddingTop: 16,
    },
    horizontalScroll: {
        gap: 16, // Space between elements
    },
    filterButton: {
        alignItems: "center",
    },
    activeText: {
        color: "#000",
        marginBottom: 4,
        fontFamily: "poppins"
    },
    inactiveText: {
        fontFamily: "poppins",
        color: "#9CA3AF", // Gray color
    },
    activeIndicator: {
        height: 2,
        width: "50%",
        backgroundColor: "#000",
        alignSelf: "center",
    },
    dataList: {
        marginTop: 16,
        marginBottom: 56,
    },
    dataCard: {
        padding: 16,
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(10px)", // Applies only for web
    },
    cardHeader: {
        flexDirection: "row",
        gap: 12, // Space between icon and text
    },
    iconContainer: {
        // aspectRatio: 1,
        // backgroundColor: "#FEE2E2",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: "poppinsMedium",
        marginBottom: -2,
    },
    cardDate: {
        fontSize: 12,
        color: "#9CA3AF",
        fontFamily: "poppins",
        marginBottom: 12,
    },
    cardContent: {
        lineHeight: 26,
        fontFamily: "poppins",
    },
    cardFooter: {
        flexDirection: "row",
        marginTop: 16,
    },
});
export default NotificationScreen