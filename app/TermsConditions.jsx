import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import ImgBackground from '../components/ImgBackground'
import { ArrowLeft } from 'iconsax-react-native'
import { router } from 'expo-router'
import React from 'react'

const TermsConditions = () => {
    const text = [
        {
            id: 1,
            question: "Sommes-nous une entreprise virtuelles?",
            reponse: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia animi, ex cum placeat quod nostrum id laudantium aperiam neque, quos in sit iste alias, nulla odio cupiditate inventore modi necessitatibus distinctio.Neque, minima blanditiis minus animi perferendis pariatur maiores rerum error nostrum! Magni perspiciatis, ipsam eius molestias, provident qui inventore libero voluptas deleniti sed ducimus atque quidem a! Qui ab quibusdam quod repudiandae asperiores ipsam.Eaque delectus magnam voluptatum beatae odit? In officiis repellat odit enim doloribus dolorum.Laudantium consequuntur perferendis officiis ad, quae eveniet consequatur hic! Placeat magnam, facere atque, aperiam, voluptatibus dolores ut laudantium quibusdam qui consequatur corrupti corporis at? Nostrum et sunt earum, itaque totam autem in laudantium praesentium illo voluptates consequatur, optio vero ad voluptatibus sint iste nulla sequi! Ut placeat delectus neque odit beatae cum atque.Voluptate repudiandae necessitatibus aliquid rem vero dicta eligendi, aperiam molestiae, possimus reprehenderit placeat nihil pariatur commodi at consequuntur, natus aspernatur fugit sed nam voluptatibus quae quisquam deserunt nostrum itaque? Enim eligendi doloribus blanditiis aut iste inventore nam id tempore et fugiat ipsum optio officiis ad cupiditate quidem facilis veritatis veniam nesciunt deserunt saepe ex, aspernatur libero doloremque? Dolores velit ducimus vel a repellendus? Corporis ullam quod omnis at praesentium          "
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
        <View style={{ flex: 1, }}>
            <ImgBackground />
            <View style={styles.content}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ArrowLeft size={22} color="#000" variant="TwoTone" />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Termes et conditions applicables</Text>
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
                </ScrollView>
                <Text>
                </Text>
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
export default TermsConditions