import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, View, ScrollView } from 'react-native';

export default function BodyInfos({ route, navigation }) {
    const { name, surname, age, gender, height, weight,diet,sport } = route.params;

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

    const calculateKcal = (bmr,sport) => {
        if (sport==='none') {
            return (bmr*1.2); // LITTLE TO NO EXERCISE
        } else if (sport==='light'){
            return (bmr*1.375); // LIGHT EXERCISE
        } else if (sport==='moderate'){
            return (bmr*1.55); // MODERATE EXERCISE (3-5 DAYS)
        } else if (sport==='active'){
            return (bmr*1.725); // VERY ACTIVE EXERCISE (6-7 DAYS)
        } else if (sport==='extra'){
            return (bmr*1.9); // EXTRA ACTIVE EXERCISE
        }
        return 0;
    };
   

    const bmi = calculateBMI(weight, height);
    const bmr = calculateBMR(age, weight, height, gender);   
    const kcal = calculateKcal(bmr,sport);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
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
                    <Text style={styles.text}>BMI:</Text>
                    <Text style={styles.info}>{bmi}</Text>
                    <Text style={styles.text}>BMR:</Text>
                    <Text style={styles.info}>{bmr}</Text>
                    <Text style={styles.text}>Diet:</Text>
                    <Text style={styles.info}>{diet}</Text>
                    <Text style={styles.text}>Total calorie recommended:</Text>
                    <Text style={styles.info}>{kcal}</Text>
                    
                    <Button color="plum" title="Go Back to Registration" onPress={() => navigation.navigate('Registration')} />
                    <Text>  </Text>
                    <Button color="plum" title="Choose my meal plan" onPress={() => {
                                navigation.navigate('Meal', {
                                    name, surname, age, gender, height, weight,diet,kcal,
                                });
                            }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'plum',
        paddingBottom: 100,
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
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        // ios shadows
        shadowColor: "#700070",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        // android shadows
        elevation: 8,
    },
    text:{
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
