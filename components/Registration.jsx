import { SafeAreaView, Text, TextInput, Button } from "react-native";
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';

export default function Home({ navigation }) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState(""); // Taille
    const [weight, setWeight] = useState(""); // Poids

    // Radio buttons pour choisir le genre
    const radioButtonsGender = useMemo(() => ([
        {
            id: '1', 
            label: 'Female',
            value: 'Female',
        },
        {
            id: '2',
            label: 'Male',
            value: 'Male',
        }
    ]), []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Welcome to the Home Page!</Text>
            
            <TextInput 
                style={styles.input} 
                value={name} 
                placeholder="Enter your name" 
                onChangeText={(e) => setName(e)} 
            /> 
            
            <TextInput 
                style={styles.input} 
                value={surname} 
                placeholder="Enter your surname" 
                onChangeText={(e) => setSurname(e)} 
            />
            
            <TextInput 
                style={styles.input} 
                value={age} 
                keyboardType="numeric" 
                placeholder="Enter your age" 
                onChangeText={(e) => setAge(e)} 
            />
            
            <Text>Choose your gender:</Text>
            <RadioGroup 
                radioButtons={radioButtonsGender} 
                onPress={setGender} 
                selectedId={gender} 
            />

            <TextInput 
                style={styles.input} 
                value={height} 
                keyboardType="numeric" 
                placeholder="Enter your height (cm)" 
                onChangeText={(e) => setHeight(e)} 
            />

            <TextInput 
                style={styles.input} 
                value={weight} 
                keyboardType="numeric" 
                placeholder="Enter your weight (kg)" 
                onChangeText={(e) => setWeight(e)} 
            />

            <Button 
                title="Go to BodyInfos" 
                onPress={() => {
                    navigation.navigate('BodyInfos', {
                        name,
                        surname,
                        age,
                        gender,
                        height,
                        weight,
                    });
                }} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: 200,
        height: 40,
        marginBottom: 10,
        paddingLeft: 8,
    },
});
    