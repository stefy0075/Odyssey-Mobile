import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../screens/Home"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Drawer.Screen name="Odyssey" component={Home} />
      <Drawer.Screen name="Sign In" component={SignIn} />
      <Drawer.Screen name="Sign Up" component={SignUp} />
    </Drawer.Navigator>
  )      
}

const screenOptions = {
    headerStyle: {
      backgroundColor: '#1C1F37'
    },
    headerTintColor: '#D1F366',
    headerTitleStyle: {
      fontWeight: 'bold', 
      color: '#fff',
    },
    drawerStyle: {
      backgroundColor: '#1C1F37',
   },
    drawerActiveTintColor: '#fff',
    drawerInactiveTintColor: 'gray',         
  }
