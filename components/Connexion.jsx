//importing the librairies we need to use the components and informations from react native and firebase
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database'; 

//creating the connexion function that will allow the users to connect in the app

export default function Connexion({ navigation }) {
  //we are defining our variables to nothing to store the informations we need (email,password and the user data from our database)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle error messages

  //we are creating the function to load the user data from the firebase database
  //DEMANDER A EUDES DE COMMENTER CETTE PARTIE DU CODE
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

  //we are using the useEffect function to load the user data at the beginning
  useEffect(() => {
    loadUserData();
  }, []); //we are using the empty [] to make sure that we load the data only once

  
  //function to handle the login into the user account
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

    //if the user is found then we navigate into the home page with the user's chosed diet
    //if we can't find the user we alert the user that maybe the email of password is wrong
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
