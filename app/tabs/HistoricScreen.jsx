import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import ImgBackground from '../../components/ImgBackground'

const HistoricScreen = () => {
    const data = [
        { id: 1, date: "12/03/2024", amount: 600, type: "deposit" },
        { id: 2, date: "11/03/2024", amount: 500, type: "withdrawal" },
        { id: 3, date: "10/03/2024", amount: 400, type: "deposit" },
        { id: 4, date: "09/03/2024", amount: 300, type: "withdrawal" },
        { id: 5, date: "08/03/2024", amount: 200, type: "deposit" },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ImgBackground />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 16 }} >
                <View style={{ marginBottom: 24 }}>
                    <Text style={{ fontFamily: "poppinsMedium", fontSize: 16 }}>
                        Historique
                    </Text>
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
                </View>

            </ScrollView>
        </View >
    )
}

export default HistoricScreen