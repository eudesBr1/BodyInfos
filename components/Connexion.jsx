import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import xmlJs from 'xml-js';
export default function Connexion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [xmlData, setXmlData] = useState(null);

  // Load and parse the XML file with user data
  useEffect(() => {
    const loadXML = async () => {
      try {
        const asset = Asset.fromModule(require('../assets/XMLResponse.xml'));
        await asset.downloadAsync();
        const xmlContent = await FileSystem.readAsStringAsync(asset.localUri);
        const jsonData = JSON.parse(xmlJs.xml2json(xmlContent, { compact: true, spaces: 4 }));
        setXmlData(jsonData);
      } catch (error) {
        console.error('Erreur lors du chargement du fichier XML :', error);
      }
    };
    loadXML();
  }, []);

  const handleLogin = () => {
    if (!xmlData) {
      console.error("Data not loaded yet.");
      return;
    }

    console.log('Données XML chargées:', xmlData); // Vérifie la structure ici

    // Recherche de l'utilisateur dans les données XML
    const user = xmlData.people.person.find(
      (person) => person.email && person.email._text === email && person.password && person.password._text === password
    );

    if (user) {
      // Si un utilisateur est trouvé, on navigue vers l'écran 'Home'
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
