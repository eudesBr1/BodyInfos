import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
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
      navigation.navigate('Home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail :"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password :"
        />
        <Button title="Submit" onPress={handleLogin} />
        <Text>You don't have an account?</Text>
        <Button
          title="Registration"
          onPress={() => navigation.navigate('Registration')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
};
