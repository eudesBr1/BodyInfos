import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';

export default function BodyInfos({ navigation, route }) {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    // Récupération de l'ID utilisateur passé via la navigation
    const { userId } = route.params; // Récupérer l'ID de l'utilisateur passé par la page de connexion

    useEffect(() => {
        const fetchUserData = async () => {
            const db = getDatabase();
            const userRef = ref(db, `users/${userId}`); // Utilisation du userId dynamique

            try {
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    console.log('Données utilisateur récupérées :', snapshot.val());
                    setUserData(snapshot.val()); // Mise à jour des données utilisateur
                } else {
                    console.log('Aucune donnée trouvée pour l\'utilisateur :', userId);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]); // Refetch les données quand l'userId change

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    const { name, surname, age, gender, height, weight, diet } = userData;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.header}>Body Informations</Text>
                <Text style={styles.text}>Name:</Text>
                <Text style={styles.info}>{name} {surname}</Text>
                <Text style={styles.text}>Age:</Text>
                <Text style={styles.info}>{age}</Text>
                <Text style={styles.text}>Gender:</Text>
                <Text style={styles.info}>{gender === '2' ? 'Male' : 'Female'}</Text>
                <Text style={styles.text}>Height:</Text>
                <Text style={styles.info}>{height} cm</Text>
                <Text style={styles.text}>Weight:</Text>
                <Text style={styles.info}>{weight} kg</Text>
                <Text style={styles.text}>Diet:</Text>
                <Text style={styles.info}>{diet}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'plum',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    box: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        padding: 15,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    info: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'plum',
        borderRadius: 20,
        paddingLeft: 10,
    },
});
