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
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  //we are using the useEffect function to load the user data at the beginning
  useEffect(() => {
    loadUserData();
  }, []); //we are using the empty [] to make sure that we load the data only once

  
  //function to handle the login into the user account
  const handleLogin = () => {
    //if the data hasn't been loaded there is an error
    if (!userData) {
      console.error("User data not loaded yet.");
      return;
    }

    //we are looking for the user in our database with the email and the password
    const user = Object.values(userData).find(
      (person) => person.email === email && person.password === password
    );

    //if the user is found then we navigate into the home page with the user's chosed diet
    //if we can't find the user we alert the user that maybe the email of password is wrong
    if (user) {
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
