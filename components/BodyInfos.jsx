import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default function BodyInfos({ route, navigation }) {
    const { name, surname, age, gender, height, weight } = route.params;

    const calculateBMI = (weight, height) => {
        if (weight && height) {
            const heightInMeters = height / 100;
            return (weight / (heightInMeters * heightInMeters)).toFixed(2);
        }
        return 0;
    };

    const calculateBMR = (age, weight, height, gender) => {
        if (age && weight && height) {
            if (gender === '2') {
                return (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)).toFixed(2); // Homme
            } else if (gender === '1') {
                return (655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)).toFixed(2); // Femme
            }
        }
        return 0;
    };

    const bmi = calculateBMI(weight, height);
    const bmr = calculateBMR(age, weight, height, gender);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Body Information</Text>
            <Text style={styles.info}>Name: {name} {surname}</Text>
            <Text style={styles.info}>Age: {age}</Text>
            <Text style={styles.info}>Gender: {gender === '2' ? 'Male' : 'Female'}</Text>
            <Text style={styles.info}>Height: {height} cm</Text>
            <Text style={styles.info}>Weight: {weight} kg</Text>
            <Text style={styles.info}>BMI: {bmi}</Text>
            <Text style={styles.info}>BMR: {bmr}</Text>
            <Button title="Go Back to Registration" onPress={() => navigation.navigate('Registration')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
});
