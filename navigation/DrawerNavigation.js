import React, { useState } from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import FAQs from "../screens/FAQs";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import DestinatiosScreen from "../screens/Destinations";
import Hola from "../screens/Hola";


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (

    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header />,
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen name="Destinations" component={DestinatiosScreen} />
      <Drawer.Screen name="Hola" component={Hola} />
      <Drawer.Screen name="FAQ's" component={FAQs} />
      <Drawer.Screen name="Sign In" component={SignIn} />
      <Drawer.Screen name="Sign Up" component={SignUp} />
      <Drawer.Screen name='Cart' component={CartScreen} />
    </Drawer.Navigator>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#141627",
  },
  headerTintColor: "#D1F366",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#fff",
  },
  drawerStyle: {
    backgroundColor: "#141627",
    width: "70%",
  },
  drawerActiveTintColor: "#fff",
  drawerInactiveTintColor: "gray",
};

function CustomDrawerContent(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="close" size={30} color="#D1F366" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("Home")}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => <Ionicons name="home" size={24} color="#D1F366" />}
        />
        <DrawerItem
          label="Destinations"
          onPress={() => props.navigation.navigate("Destinations")}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => <Ionicons name="airplane" size={24} color="#D1F366" />}
        />
        <DrawerItem
          label="Sign In"
          onPress={() => props.navigation.navigate("Sign In")}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => <Ionicons name="log-in" size={24} color="#D1F366" />}
        />
        <DrawerItem
          label="Sign Up"
          onPress={() => props.navigation.navigate("Sign Up")}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => <Ionicons name="person-add" size={24} color="#D1F366" />}
        />
        <DrawerItem
          label="Cart"
          onPress={() => props.navigation.navigate("Cart")}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => <Ionicons name="cart" size={24} color="#D1F366" />}
        />
        <DrawerItem
          label="FAQ's"
          onPress={() => props.navigation.navigate("FAQ's")}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => <Ionicons name="help-circle" size={24} color="#D1F366" />}
        />
        <DrawerItem
          label={`Mode ${!isDarkMode ? "Dark" : "Ligth"}`}
          onPress={toggleDarkMode}
          inactiveTintColor="#ffffff"
          labelStyle={styles.drawerLabel}
          icon={() => (
            <Ionicons
              name={isDarkMode ? "sunny" : "moon"}
              size={24}
              color="#D1F366"
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1F37",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  menuContainer: {
    flex: 1,
    marginTop: 50,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -16,
    color: "#fff",
  },
});
