import { SafeAreaView, Text, Alert, TextInput, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import { auth, db } from '../app/firebaseCongig'; // Importation des services Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useNavigation } from "expo-router";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Home() {
  const [name, setName] = useState("");  // Ajout du champ name
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(""); // Taille
  const [weight, setWeight] = useState(""); // Poids
  const [diet, setDiet] = useState(""); // Régime
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const createProfile = async (user: any) => {
    try {
      // Enregistrer toutes les informations dans Firebase Realtime Database
      await set(ref(db, '/users/' + user.uid), {
        name,
        surname,
        age,
        gender,
        height,
        weight,
        diet,
        email,
        password
      });
      console.log("Profile created successfully!");
    } catch (error) {
      console.error("Error creating profile:", error);
      Alert.alert("Error", "Could not create profile. Please try again.");
    }
  };

  const registerAndGoToMainFlow = async () => {
    if (email && password) {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        if (user) {
          await createProfile(user);  // Enregistrer les informations utilisateur dans Firebase
          navigation.navigate("Meal"); // Naviguer vers la page principale après l'inscription
        }
      } catch (error) {
        console.error("Registration error:", error);
        Alert.alert("Oops", "Please check form and try again.");
      }
    } else {
      Alert.alert("Please fill all fields correctly");
    }
  };

  const radioButtonsDiet = [
    {
      id: 'Regular',
      label: 'Regular',
      value: 'Regular',
    },
    {
      id: 'Vegan',
      label: 'Vegan',
      value: 'Vegan',
    },
    {
      id: 'Vegetarian',
      label: 'Vegetarian',
      value: 'Vegetarian',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome to the Home Page!</Text>

          <View style={styles.box}>
            <Text style={styles.text}>Personal Information:</Text>
            
            {/* Nouveau champ pour le nom */}
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Name"
              onChangeText={(e) => setName(e)}
            />

            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
            />

            <TextInput
              style={styles.input}
              value={password}
              placeholder="Password"
              secureTextEntry
              onChangeText={(e) => setPassword(e)}
            />

            <TextInput
              style={styles.input}
              placeholder="Age"
              value={age}
              keyboardType="numeric"
              onChangeText={(e) => setAge(e)}
            />

            <Text style={styles.text}>Choose your gender:</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.touchable, gender === "Female" ? styles.select : styles.unselect]}
                onPress={() => setGender("Female")}
              >
                <Text> Female </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.touchable, gender === "Male" ? styles.select : styles.unselect]}
                onPress={() => setGender("Male")}
              >
                <Text> Male </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Body Information:</Text>
            <TextInput
              style={styles.input}
              placeholder="Height (cm)"
              value={height}
              keyboardType="numeric"
              onChangeText={(e) => setHeight(e)}
            />

            <TextInput
              style={styles.input}
              placeholder="Weight (kg)"
              value={weight}
              keyboardType="numeric"
              onChangeText={(e) => setWeight(e)}
            />

            <Text style={styles.text}>Choose your diet:</Text>
            <RadioGroup radioButtons={radioButtonsDiet} onPress={setDiet} selectedId={diet} />

            <Button
              color="plum"
              title="Go to BodyInfos"
              onPress={() => {
                navigation.navigate('BodyInfos', {
                  name,
                  surname,
                  age,
                  gender,
                  height,
                  weight,
                  diet,
                });
              }}
            />

            <Button
              color="plum"
              title="Register and Go to Main"
              onPress={registerAndGoToMainFlow} // Call registration function
            />
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
  touchable: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    width: 150,
    paddingLeft: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  select: {
    backgroundColor: 'plum',
  },
  unselect: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
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
