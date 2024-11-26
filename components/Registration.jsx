import { SafeAreaView, Text, TextInput, Button, View, ScrollView } from "react-native";
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
    const [diet,setDiet]=useState("");// Regime

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

    const radioButtonsDiet = useMemo(()=>([
        {
            id: 'Regular',
            label:'Regular',
            value:'Regular',
        },
        {
            id: 'Vegan',
            label:'Vegan',
            value:'Vegan',
        },
        {
            id:'Vegetarian',
            label:'Vegetarian',
            value:'Vegetarian',
        }
    ]))

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Welcome to the Home Page!</Text>

                    <View style={styles.box}>
                        <Text style={styles.text}>Personnal Informations :</Text>
                        <TextInput style={styles.input} value={name} placeholder="Name" onChangeText={(e) => setName(e)} />

                        <TextInput style={styles.input} value={surname} placeholder="Surname" onChangeText={(e) => setSurname(e)} />

                        <TextInput style={styles.input} placeholder="Age" value={age} keyboardType="numeric" onChangeText={(e) => setAge(e)} />

                        <Text style={styles.text}>Choose your gender:</Text>
                        <RadioGroup radioButtons={radioButtonsGender} onPress={setGender} selectedId={gender} />

                        <Text style={styles.text}>Body Informations :</Text>
                        <TextInput style={styles.input} placeholder="Height (cm)" value={height} keyboardType="numeric" onChangeText={(e) => setHeight(e)} />

                        <TextInput style={styles.input} placeholder="Weight (kg)" value={weight} keyboardType="numeric" onChangeText={(e) => setWeight(e)} />
                        <Text style={styles.text}> Choose your diet :</Text>
                        <RadioGroup radioButtons={radioButtonsDiet} onPress={setDiet} selectedId={diet}/>

                        <Button color="plum" title="Go to BodyInfos" onPress={() => {
                            navigation.navigate('BodyInfos', {
                                name, surname, age, gender, height, weight,diet,
                            });
                        }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor: 'plum',
        paddingBottom: 100,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 40,
        marginBottom: 10,
        margin: 10,
        paddingLeft: 8,
        borderRadius: 20,
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
});
