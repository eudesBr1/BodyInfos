import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import xmlJs from 'xml-js';
import { getDatabase, ref, get } from 'firebase/database'; // Import Firebase database functions

export default function Connexion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  // Function to load user data from Firebase Realtime Database
  const loadUserData = async () => {
    try {
      const db = getDatabase();
      const usersRef = ref(db, 'users');  // Reference to the users node in your Firebase database
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        setUserData(snapshot.val());  // Set all user data if available
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  // Load user data when the component mounts
  useEffect(() => {
    loadUserData();
  }, []);

  // Handle login logic
  const handleLogin = () => {
    if (!userData) {
      console.error("User data not loaded yet.");
      return;
    }

    // Search for the user in the Firebase data
    const user = Object.values(userData).find(
      (person) => person.email === email && person.password === password
    );

    if (user) {
      // If user found, navigate to 'Home' screen
      const pref=user.diet;
      navigation.navigate('Home',{pref});
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View  style={styles.container}>
          <Text style={styles.header}>Welcome to the connexion page !</Text>
          <View style={styles.box}>
            <Text style={styles.text}>Connexion</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="E-mail :"/>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Password :"/>
            <Button title="Submit" color="plum" onPress={handleLogin}/>
            <Text/>
            <Text>You don't have an account?</Text>
            <Button color="plum" title="Registration" onPress={() => navigation.navigate('Registration')}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: 'plum',
    paddingBottom: 320,
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },  
  text:{
    fontSize:14,
    fontWeight:'bold',
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
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
};
