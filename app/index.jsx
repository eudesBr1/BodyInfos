import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../components/Home";
import BodyInfos from "../components/BodyInfos";
import Meal from "../components/Meal";
import Registration from "../components/Registration";
import Connexion from "../components/Connexion"


export default function Index() {

  const Drawer= createDrawerNavigator();
  
  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Registration">
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="BodyInfos" component={BodyInfos}/>
          <Drawer.Screen name="Meal" component={Meal}/>
          <Drawer.Screen name="Registration" component={Registration}/>
          <Drawer.Screen name="Connexion" component={Connexion}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}