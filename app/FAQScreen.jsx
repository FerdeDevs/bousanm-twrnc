import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React from 'react'
import { ArrowLeft } from 'iconsax-react-native'
import ImgBackground from '../components/ImgBackground'
import { router } from 'expo-router'

const FAQScreen = () => {
    const text = [
        {
            id: 1,
            question: "Sommes-nous une entreprise virtuelles?",
            reponse: "Nous Sommes une entreprise physique avec une équipe compétente dynamique et sérieuse dans divers domaine."
        },
        {
            id: 2,
            question: "Pourquoi faire confiance à Zig Investment ou Bousanm?",
            reponse: "Notre confiance se trouve dans la diversité de nos investissements et les différentes façons de faire circuler l’argent dans nos communautés.Nous Sommes une entreprise physique avec une équipe compétente dynamique et sérieuse dans divers domaine."
        },
        {
            id: 3,
            question: "Est-ce que la plateforme BOUSANM est fiable et sécurisée?",
            reponse: " BOUSANM utilise les technologies de pointe pour éventuellement détecter, mitiger et répondre immédiatement aux incidents."
        }
    ]
    return (
        <View style={styles.container}>
            <ImgBackground />
            <View style={styles.content}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft size={22} color="#000" variant="TwoTone" />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Questions fréquemment posées</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {text.map((item) => (
                        <View key={item.id} style={styles.questionContainer}>
                            <Text style={styles.questionText}>
                                {item.id}. {item.question}
                            </Text>
                            <Text style={styles.answerText}>Reponses : {item.reponse}</Text>
                        </View>
                    ))}
                    <Text style={{ color: 'grey', fontFamily: "poppins" }}>
                        Pour plus d'informations, veuillez contacter notre service clientèle par téléphone au 509 5565-7272 ou par email à <Text style={{ color: '#007bff', fontFamily: "poppinsMedium" }}>
                            zig.bousanm@gmail.com </Text>
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 16,
    },
    header: {
        marginVertical: 16,
    },
    headerText: {
        fontSize: 20,
        fontFamily: "poppinsMedium",
        textAlign: 'left',
    },
    questionContainer: {
        marginVertical: 8,
    },
    questionText: {
        fontSize: 16,
        fontFamily: "poppinsMedium",
        marginBottom: 4,
    },
    answerText: {
        fontFamily: "poppinsMedium",
        fontSize: 14,
        lineHeight: 22,
        color: '#6b7280', // Tailwind "text-gray-500"
    },
});
export default FAQScreen