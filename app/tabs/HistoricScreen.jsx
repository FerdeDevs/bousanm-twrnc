import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import ImgBackground from '../../components/ImgBackground'

const HistoricScreen = () => {
    const data = [
        { id: 1, date: "12/03/2024", amount: 600, type: "deposit" },
        { id: 2, date: "11/03/2024", amount: 500, type: "withdrawal" },
        { id: 3, date: "10/03/2024", amount: 400, type: "deposit" },
        { id: 4, date: "09/03/2024", amount: 300, type: "withdrawal" },
        { id: 5, date: "08/03/2024", amount: 200, type: "deposit" },
    ]
    const down = [
        { label: 'All', value: '1' },
        { label: 'Compte 2', value: '2' },
        { label: 'Compte 3', value: '3' }
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };
    return (
        <View style={{ flex: 1 }}>
            <ImgBackground />
            <View style={{ paddingHorizontal: 16 }} >
                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 14, marginBottom: 16 }}>
                        Historique de transactions
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={down}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        //placeholder={!isFocus ? 'Selectionner' : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <MaterialCommunityIcons name="transfer"
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                size={20} />

                        )}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 130 }}>
                    {
                        data.map((item, index) => {
                            return (
                                <View style={{
                                    backgroundColor: "rgba(255,255,255,0.5)",
                                    borderRadius: 16,
                                    padding: 16,
                                    marginBottom: 16,
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 1 }
                                }}
                                    key={index}
                                >
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 12 }}>{item.date}</Text>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginVertical: 12
                                    }}>
                                        <Text style={{ fontFamily: "poppinsBold", fontSize: 18 }}>{item.amount} HTG</Text>
                                        <View style={[{ flexDirection: "row", alignItems: "center", gap: 4, padding: 5, borderRadius: 100, paddingHorizontal: 12 }, item.type == "withdrawal" ? { backgroundColor: "#bfdbfe" } : { backgroundColor: "#bbf7d0" }]} >
                                            <Text style={[{ fontFamily: "poppinsMedium", fontSize: 12, }, item.type == "withdrawal" ? { color: "#1e40af" } : { color: "#22c55e" }]}>{item.type}</Text>
                                            {
                                                item.type == "withdrawal" ?
                                                    <AntDesign name="arrowup" size={12} color="#1e40af" />
                                                    :
                                                    <AntDesign name="arrowdown" size={12} color="#22c55e" />
                                            }

                                        </View>
                                    </View>
                                    <View style={{ width: "100%", height: 1, backgroundColor: "grey", marginBottom: 8 }} />
                                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "grey" }}>id transaction : {item.id}</Text>

                                    <View style={{ marginTop: 8 }}>
                                        <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "grey" }}>Description : </Text>
                                        <Text style={{ fontFamily: "poppinsMedium", fontSize: 12, color: "#b3b3b3", lineHeight: 20 }}>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>


            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: "rgba(255,255,255,0.5)",
        height: 50,
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        fontFamily: 'poppins',
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: 'poppins',
    },
    selectedTextStyle: {
        fontSize: 16,
        fontFamily: 'poppins',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default HistoricScreen