//this is the page about the body informations the client has putted : height, weight, BMR, BMI
import {SafeAreaView, Text, Image, TextInput} from "react-native";
import React from 'react';
import {useState} from 'react';
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

export default function BodyInfos(){
    //const for the body proportions to calculate the BMI and the BMR
    const [weight,setWeight]=useState("");
    const [height,setHeight]=useState("");

    return(
        <SafeAreaView>
            <Text style={styles.container}>Here is all your body informations</Text>
            <TextInput style={styles.input} value={weight} keyboardType = 'numeric' placeholder="Enter your weight" onChangeText={(e) => setWeight(e)}/>
            <TextInput style={styles.input} value={height} keyboardType = 'numeric' placeholder="Enter your height" onChangeText={(e) => setHeight(e)}/>
        </SafeAreaView>
    );
}