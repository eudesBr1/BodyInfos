import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
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
      const usersRef = ref(db, 'users');  // Reference to the users database in your Firebase realtime database
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

  // Handle login logic password and user required 
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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}> Welcome to the connexion page ! </Text>
        <View style={styles.box}>

          {/* Inputs to connect the customer to his account */}      
          <Text style={styles.text}>E-mail :</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="E-mail" keyboardType="email-address"/>
          <Text style={styles.text}>Password :</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Password"/>
          
          {/* Display error message*/}
          {error && <Text style={styles.error}>{error}</Text>}
          
          {/* Loading state when waiting for connexion*/}
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <Button title="Submit" color="plum" onPress={handleLogin} />
          )}
          
          <Text/>

          {/* Navigation button if the customer doesn't have an account */}
          <Text style={styles.text}>You don't have an account?</Text>
          <Button title="Register" color="plum" onPress={() => navigation.navigate('Registration')}/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

// CSS
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
    height:300,
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
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
};
