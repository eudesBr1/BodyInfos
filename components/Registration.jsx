import { SafeAreaView, Text, TextInput, Button,View } from "react-native";
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
            
            <View style={styles.box}>
                <Text style={styles.text}>Personnal Informations :</Text>
            <TextInput 
                style={styles.input} 
                value={name} 
                placeholder="Name" 
                onChangeText={(e) => setName(e)} 
            /> 
            
            <TextInput 
                style={styles.input} 
                value={surname} 
                placeholder="Surname" 
                onChangeText={(e) => setSurname(e)} 
            />
            
            <TextInput style={styles.input} placeholder="Age" value={age} keyboardType="numeric" onChangeText={(e) => setAge(e)}/>
            
            <Text style={styles.text}>Choose your gender:</Text>
            <RadioGroup radioButtons={radioButtonsGender} onPress={setGender} selectedId={gender} />

            <Text style={styles.text}>Body Informations :</Text>
            <TextInput style={styles.input}  placeholder=" Height (cm)" value={height} keyboardType="numeric" onChangeText={(e) => setHeight(e)}/>

            <TextInput style={styles.input} placeholder="Weight (kg)" value={weight} keyboardType="numeric" onChangeText={(e) => setWeight(e)} />

            <Button title="Go to BodyInfos" onPress={() => {navigation.navigate('BodyInfos', {
                        name, surname, age, gender, height, weight,});
                }}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    //FAIRE TEXTE EN BOLD
    text: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: 200,
        height: 40,
        marginBottom: 10,
        margin: 10,
        paddingLeft: 8,
    },
    box : {
        backgroundColor:'plum', 
        //BORDERCOLOR MARCHE PAS
        borderColor: 'black',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        padding: 15,

        //SHADOW CA FAIT RIENé
        shadowColor:'red',
        shadowOffset : {width:0, height: 12},
        shadowOpacity: 10,
        shadowRadius: 3,
    },

});
    