import React, { useState, useEffect, useCallback } from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import FAQs from "../screens/FAQs";
import CartScreen from "../screens/CartScreen";
import DestinatiosScreen from "../screens/Destinations";
import Blog from "../screens/Blog";
import DetailScreen from "../screens/Detail";
import LogOutButton from "../components/Logout";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import action from '../store/ReloadState/Actions'

const {captureState} = action

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const dispatch = useDispatch()
  const reloadState = useSelector(store => store.reloadReducer.reloadState)
  console.log(reloadState)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reload, setReload] = useState(false)
  const [token, setToken] = useState('')

  useFocusEffect(
    useCallback(() => {
      async function checkToken() {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        setToken(token)
      }    
      checkToken();
    }, [reloadState])
  );
    useEffect(()=>{
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    },[token])

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} isAuthenticated={isAuthenticated} />
      )}
    >
      {isAuthenticated ? (
        <>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => <Header />,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen name="Destinations" component={DestinatiosScreen} />
          <Drawer.Screen name="Detail" component={DetailScreen} />
          <Drawer.Screen name="FAQ's" component={FAQs} />
          <Drawer.Screen name="Cart" component={CartScreen} />
          <Drawer.Screen name="Blog" component={Blog} />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => <Header />,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen name="Sign In" component={SignIn} />
          <Drawer.Screen name="Sign Up" component={SignUp} />
        </>
      )}
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
  const dispatch = useDispatch()
  const reloadState = useSelector(store => store.reloadReducer.reloadState)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    setTimeout(() => {
      dispatch(captureState({'reloadState': !reloadState }))
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="close" size={30} color="#D1F366" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        {props.isAuthenticated ? (
          <>
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
              icon={() => (
                <Ionicons name="airplane" size={24} color="#D1F366" />
              )}
            />
            <DrawerItem
              label="Cart"
              onPress={() => props.navigation.navigate("Cart")}
              inactiveTintColor="#ffffff"
              labelStyle={styles.drawerLabel}
              icon={() => <Ionicons name="cart" size={24} color="#D1F366" />}
            />
            <DrawerItem
              label="Blog"
              onPress={() => props.navigation.navigate("Blog")}
              inactiveTintColor="#ffffff"
              labelStyle={styles.drawerLabel}
              icon={() => <Ionicons name="book" size={24} color="#D1F366" />}
            />
            <DrawerItem
              label="FAQ's"
              onPress={() => props.navigation.navigate("FAQ's")}
              inactiveTintColor="#ffffff"
              labelStyle={styles.drawerLabel}
              icon={() => (
                <Ionicons name="help-circle" size={24} color="#D1F366" />
              )}
            />
            <DrawerItem
              label="Logout"
              onPress={ handleLogout }
              inactiveTintColor="#ffffff"
              labelStyle={styles.drawerLabel}
              icon={() => <Ionicons name="log-out" size={24} color="#D1F366" />}
            />
          </>
        ) : (
          <>
            <DrawerItem
              label="Home"
              onPress={() => props.navigation.navigate("Home")}
              inactiveTintColor="#ffffff"
              labelStyle={styles.drawerLabel}
              icon={() => <Ionicons name="home" size={24} color="#D1F366" />}
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
              icon={() => (
                <Ionicons name="person-add" size={24} color="#D1F366" />
              )}
            />
          </>
        )}
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
