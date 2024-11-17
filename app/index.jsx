import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


import Inscription from "../components/Registration";
import Home from "../components/Home";
import BodyInfos from "../components/BodyInfos";
import Meal from "../components/Meal";
import Registration from "../components/Registration";

export default function Index() {

  const Drawer= createDrawerNavigator();
  
  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="BodyInfos" component={BodyInfos}/>
          <Drawer.Screen name="Meal" component={Meal}/>
          <Drawer.Screen name="Registration" component={Registration}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}