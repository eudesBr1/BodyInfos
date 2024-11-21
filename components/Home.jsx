//Home Page
import {SafeAreaView, Text, TextInput, Button, View} from "react-native"
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
//import { RadioGroup } from "react-native-radio-buttons-group";
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from "@react-navigation/native";



//IL FAUT QUE SI ON APPUYE SUR UN BOUTTON IL NOUS EMMENE SUR LA PAGE DE MEAL
export default function Home(){
    const navigation = useNavigation(); 
    
    const [diet,setDiet]=useState("");

    //radio buttons to select the Dietary 
    const radioButtonsDiet = useMemo(()=>([
        {
            id: '1',
            label:'Regular',
            value:'Regular',
        },
        {
            id: '2',
            label:'Vegan',
            value:'Vegan',
        },
        {
            id:'3',
            label:'Vegetarian',
            value:'Vegetarian',
        }
    ]))

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}> Welcome to the Home page ! </Text>
            
            <View style={styles.box}>
            <Text style={styles.text}> Choose your diet :</Text>
            <RadioGroup radioButtons={radioButtonsDiet} onPress={setDiet} selectedId={diet}/>
            
            {/* Button to navigate to the "Meal" page */}
            
            <Text/>
            <Button title="My body informations" color="plum"
                onPress={() => navigation.navigate('Meal', { diet })}
            />
            <Text/>
            <Button title="Change my meal plan" color="plum"
                onPress={() => navigation.navigate('Meal', { diet })}
            />
             </View>

        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container :{
        flex: 1,
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: 'plum',
        paddingBottom: 100,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        width: 200,
        height: 40,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
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
