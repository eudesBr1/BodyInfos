//PAGE DE CONNEXION AVEC LA BDD
import {SafeAreaView, Text, TextInput, Button} from "react-native"
import { useRef } from "react";

export default function Connexion({navigation}){
    const email=useRef("");
    const password=useRef("");

    return(
        <SafeAreaView>
            <TextInput style={styles.input} ref={email} placeholder="E-mail :"/>
            <TextInput style={styles.input} type="password "ref={password} placeholder="Password :" />
            <Button title="Submit" onPress={() => {navigation.navigate('Home')}}/>
            <Text>You don't have an account ? </Text>
            <Button
                title="Registration"
                onPress={() => navigation.navigate('Registration')}
            />
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
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    }
});