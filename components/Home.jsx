//Home Page
import {SafeAreaView, Text, Image, TextInput, Button} from "react-native"
import { useState } from "react";
import { StyleSheet } from "react-native";

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

export default function Home({navigation}){
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");

    return(
        <SafeAreaView >
            <Text style={styles.container}> Welcome to the Home page ! </Text>
            {/* probably change the form, the start is not that pretty */}
            <TextInput style={styles.input} value={name} placeholder="Enter your name" onChangeText={(e) => setName(e)}/> 
            <TextInput style={styles.input} value={surname} placeholder="Enter your surname" onChangeText={(e) => setSurname(e)}/>
            {/*Trouver comment rendre ca plus jolie */}
            <TextInput style={styles.input} value={age} keyboardType = 'numeric' placeholder="Enter your age" onChangeText={(e) => setAge(e)}/>
            {/*Trouver comment faire un select avec react native */}
            <TextInput style={styles.input} value={gender} placeholder="Enter your gender" onChangeText={(e) => setGender(e)}/>
            <Button title="Submit" onPress={() => {navigation.navigate('BodyInfos',
                {name:{name}})
            }}/>
        </SafeAreaView>
    );
}
