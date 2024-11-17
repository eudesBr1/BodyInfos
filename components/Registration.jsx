//Home Page
import {SafeAreaView, Text, TextInput, Button} from "react-native"
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
//import { RadioGroup } from "react-native-radio-buttons-group";
import RadioGroup from 'react-native-radio-buttons-group';



export default function Home({navigation}){
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");

    //raido buttons to select the gender
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

    return(
        <SafeAreaView >
            <Text style={styles.container}> Welcome to the Home page ! </Text>
            {/* probably change the CSS */}
            <TextInput style={styles.input} value={name} placeholder="Enter your name" onChangeText={(e) => setName(e)}/> 
            <TextInput style={styles.input} value={surname} placeholder="Enter your surname" onChangeText={(e) => setSurname(e)}/>
            <TextInput style={styles.input} value={age} keyboardType = 'numeric' placeholder="Enter your age" onChangeText={(e) => setAge(e)}/>
            
            <Text> Choose your gender :</Text>
            <RadioGroup radioButtons={radioButtonsGender} onPress={setGender} selectedId={gender}/>

            <Button title="Submit" onPress={() => {navigation.navigate('Home',
                {name:{name}})
            }}/>
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
