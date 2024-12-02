import { SafeAreaView, Text, Alert, TextInput, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { auth, db } from '../app/firebaseCongig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useNavigation } from "expo-router";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Home() {
  const [name, setName] = useState("");  
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState(""); 
  const [diet, setDiet] = useState(""); 
  const [sport, setSport] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const createProfile = async (user: any) => {
    try {
      // Save all infos Firebase Realtime Database
      await set(ref(db, '/users/' + user.uid), {
        name, age, gender, height, weight, diet, email, password, sport
      });
      console.log("Profile created successfully!");
    } catch (error) {
      console.error("Error creating profile:", error);
      Alert.alert("Error", "Could not create profile. Please try again.");
    }
  };

  const registerAndGoToConnectFlow = async () => {
    if (email && password) {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        if (user) {
          await createProfile(user);  // Save a new user 
          
          navigation.navigate("Connexion"); // Navigate to connexion
        }
      } catch (error) {
        console.error("Registration error:", error);
        Alert.alert("Oops", "Please check form and try again.");
      }
    } else {
      Alert.alert("Please fill all fields correctly");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome to the Registration Page !</Text>

          <View style={styles.box}>
            <Text style={styles.text}>Personal Information:</Text>

            {/* Inputs for the informations we need: name, email, password, gender, height and weight to calculate the BMI and BMR */}
            <TextInput style={styles.input} value={name} placeholder="Name" onChangeText={(e) => setName(e)} />

            <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={(e) => setEmail(e)} />

            <TextInput style={styles.input} value={password} placeholder="Password" secureTextEntry 
              onChangeText={(e) => setPassword(e)} />

            <TextInput style={styles.input} placeholder="Age" value={age} keyboardType="numeric" 
              onChangeText={(e) => setAge(e)} />

            <Text style={styles.text}>Choose your gender:</Text>
            <View style={styles.row}>
              <TouchableOpacity style={[styles.touchable, gender === "1" ? styles.select : styles.unselect]}
                onPress={() => setGender("1")}>
                <Text> Female </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.touchable, gender === "2" ? styles.select : styles.unselect]}
                onPress={() => setGender("2")}>
                <Text> Male </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Body Information:</Text>
            <TextInput style={styles.input} placeholder="Height (cm)" value={height} keyboardType="numeric" 
              onChangeText={(e) => setHeight(e)} />

            <TextInput style={styles.input} placeholder="Weight (kg)" value={weight} keyboardType="numeric"
              onChangeText={(e) => setWeight(e)} />

            {/* Inputs for the complementary informations we need: the diet and if the customer exercises a lot */}
            <Text style={styles.text}>Choose your diet:</Text>
            <View style={styles.column}>
              <TouchableOpacity 
                style={[styles.touchable, diet === "Regular" ? styles.select : styles.unselect]}
                onPress={() => setDiet("Regular")}>
                <Text> Regular </Text>
              </TouchableOpacity>
              <Text/>
              
              <TouchableOpacity
                style={[styles.touchable, diet === "Vegetarian" ? styles.select : styles.unselect]}
                onPress={() => setDiet("Vegetarian")}>
                <Text> Vegetarian </Text>
              </TouchableOpacity>
              <Text/>
              
              <TouchableOpacity
                style={[styles.touchable, diet === "Vegan" ? styles.select : styles.unselect]}
                onPress={() => setDiet("Vegan")}>
                <Text> Vegan </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>How much do you exercise :</Text>
            <View style={styles.column}>
              <TouchableOpacity 
                style={[styles.touchable2, sport === "none" ? styles.select : styles.unselect]}
                onPress={() => setSport("none")}>
                <Text> Little to no exercise </Text>
              </TouchableOpacity>
              <Text/>
              
              <TouchableOpacity
                style={[styles.touchable2, sport === "light" ? styles.select : styles.unselect]}
                onPress={() => setSport("light")}>
                <Text> Light exercise</Text>
              </TouchableOpacity>
              <Text/>
              
              <TouchableOpacity
                style={[styles.touchable2, sport === "moderate" ? styles.select : styles.unselect]}
                onPress={() => setSport("moderate")}>
                <Text> Moderate exercise (3-5 days/week) </Text>
              </TouchableOpacity>
              <Text/>

              <TouchableOpacity
                style={[styles.touchable2, sport === "active" ? styles.select : styles.unselect]}
                onPress={() => setSport("active")}>
                <Text> Very active (6-7 days/week) </Text>
              </TouchableOpacity>
              <Text/>

              <TouchableOpacity
                style={[styles.touchable2, sport === "extra" ? styles.select : styles.unselect]}
                onPress={() => setSport("extra")}>
                <Text> Extra active (very active & physical job) </Text>
              </TouchableOpacity>
            </View>

            <Text/>
            <Text/>

            <Button color="plum" title="Register and go to connexion" onPress={registerAndGoToConnectFlow}/> 
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// CSS
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
  touchable2: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    width: 300,
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
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
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
