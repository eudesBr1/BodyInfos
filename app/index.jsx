import { Text, View, TextInput, Button, StyleSheet, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Inscription from "../components/Inscription";
import Home from "../components/Home";
import BodyInfos from "../components/BodyInfos";



export default function Index() {

  const Drawer= createDrawerNavigator();
  
  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Inscription">
          <Drawer.Screen name="Inscription" component={Inscription}/>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="BodyInfos" component={BodyInfos}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}