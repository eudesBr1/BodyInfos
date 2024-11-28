import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database'; // Import Firebase database functions

export default function Connexion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle error messages

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
        setError('No users found in the database.');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      setError('Error loading user data.');
    } finally {
      setLoading(false);
    }
  };

  // Load user data when the component mounts
  useEffect(() => {
    loadUserData();
  }, []);

  // Handle login logic
  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    if (loading) {
      alert('Data is still loading, please wait...');
      return;
    }

    if (!userData) {
      console.error("User data not loaded yet.");
      return;
    }

    // Search for the user in the Firebase data
    const user = Object.entries(userData).find(
      ([uid, person]) => person.email === email && person.password === password
    );

    if (user) {
      const [userId, userInfo] = user;
      // If user found, navigate to 'BodyInfos' screen and pass the userId (uid)
      console.log('User ID:', userId);  // Log user ID
      navigation.navigate('BodyInfos', { userId: userId });
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
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        
        {/* Display an error message if any */}
        {error && <Text style={styles.error}>{error}</Text>}

        {/* Loading state */}
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Button title="Submit" onPress={handleLogin} />
        )}

        <Text style={styles.text}>You don't have an account?</Text>
        <Button
          title="Register"
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
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
};
