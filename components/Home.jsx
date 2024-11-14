//Home Page
import {SafeAreaView, Text, Image, TextInput, Button} from "react-native"
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
            label:'Regular',
        },
        {
            id: '2',
            label:'Vegan',
            label:'Vegan',
        },
        {
            id:'3',
            label:'Vegetarian',
            label:'Vegetarian',
        }
    ]))

    return(
        <SafeAreaView >
            <Text style={styles.container}> Welcome to the Home page ! </Text>
            
            <Text> Choose your diet :</Text>
            <RadioGroup radioButtons={radioButtonsDiet} onPress={setDiet} selectedId={diet}/>
            
            {/* Button to navigate to the "Meal" page */}
            <Button
                title="Go to Meal Page"
                onPress={() => navigation.navigate('Meal', { diet })}
            />

            {/*<Button title="Submit" onPress={() => {navigation.navigate('BodyInfos',
                {name:{name}})
            }}/>*/}
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container :{
        textAlign: 'center',
        marginBottom: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        width: 200,
        height: 40,
        marginBottom: 10,
    }
});
