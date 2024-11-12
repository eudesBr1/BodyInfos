import { Text, View, TextInput, Button, StyleSheet, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from "../components/Home";
import BodyInfos from "../components/BodyInfos";



export default function Index() {

  const Drawer= createDrawerNavigator();
  
  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="BodyInfosPlus" component={BodyInfos}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}