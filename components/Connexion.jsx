import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import xmlJs from 'xml-js';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const XMLDisplay = () => {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const loadXML = async () => {
      try {
        // Charge le fichier XML à partir des assets
        const asset = Asset.fromModule(require('../assets/XMLResponse.xml'));
        await asset.downloadAsync(); // S'assure que le fichier est disponible localement

        // Lis le contenu du fichier
        const xmlContent = await FileSystem.readAsStringAsync(asset.localUri);

        // Convertir le contenu XML en JSON
        const jsonData = JSON.parse(xmlJs.xml2json(xmlContent, { compact: true, spaces: 4 }));
        setXmlData(jsonData);
      } catch (error) {
        console.error('Erreur lors du chargement du fichier XML :', error);
      }
    };

    loadXML();
  }, []);

  return (
    <View>
      {xmlData ? (
        <Text>{JSON.stringify(xmlData, null, 2)}</Text>
      ) : (
        <Text>Chargement...</Text>
      )}
    </View>
  );
};

export default XMLDisplay;
