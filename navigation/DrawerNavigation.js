import React, { useState, useCallback, useEffect } from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderBlack from "../components/HeaderBlack";
import HeaderLigth from "../components/HeaderLigth";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import FAQs from "../screens/FAQs";
import CartScreen from "../screens/CartScreen";
import DestinatiosScreen from "../screens/Destinations";
import Blog from "../screens/Blog";
import DetailScreen from "../screens/Detail";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import action from "../store/ReloadState/Actions";

const { captureState } = action;

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const [backgroundColor, setBackgroundColor] = useState("#aac4ff");

  const [isDarkMode, setIsDarkMode] = useState(false);
  const lightStyles = {
    headerStyle: {
      backgroundColor: "#aac4ff",
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#000",
    },
    drawerStyle: {
      backgroundColor: "#aac4ff",
      width: "70%",
    },
    drawerActiveTintColor: "#000",
    drawerInactiveTintColor: "gray",
    drawerLabel: {
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
      marginLeft: -16,
    },
  };

  const darkStyles = {
    headerStyle: {
      backgroundColor: "#141627",
    },
    headerTintColor: "#fff",
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
    drawerLabel: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      marginLeft: -16,
    },
  };

  const reloadState = useSelector((store) => store.reloadReducer.reloadState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  useFocusEffect(
    useCallback(() => {
      async function checkToken() {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        setToken(token);
      }
      checkToken();
    }, [reloadState])
  );
  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setBackgroundColor(isDarkMode ? "#aac4ff" : "#141627");
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...(isDarkMode ? darkStyles : lightStyles),
        headerStyle: {
          backgroundColor: isDarkMode ? "#141627" : "#aac4ff",
        },
      }}
      drawerContent={(props) => (
        <CustomDrawerContent
          {...props}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          isAuthenticated={isAuthenticated}
        />
      )}
    >
      {isAuthenticated ? (
        <>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () =>
                isDarkMode ? <HeaderBlack /> : <HeaderLigth />,
              headerTitleAlign: "center",
            }}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="Destinations"
            component={DestinatiosScreen}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="Detail"
            component={DetailScreen}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="FAQ's"
            component={FAQs}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="Cart"
            component={CartScreen}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="Blog"
            component={Blog}
            backgroundColor={backgroundColor}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () =>
                isDarkMode ? <HeaderBlack /> : <HeaderLigth />,
              headerTitleAlign: "center",
            }}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="Sign In"
            component={SignIn}
            backgroundColor={backgroundColor}
          />
          <Drawer.Screen
            name="Sign Up"
            component={SignUp}
            backgroundColor={backgroundColor}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const reloadState = useSelector((store) => store.reloadReducer.reloadState);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    setTimeout(() => {
      dispatch(captureState({ reloadState: !reloadState }));
      navigation.navigate("Home");
    }, 1000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons
            name="close"
            size={30}
            color={props.isDarkMode ? "#D1F366" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        {props.isAuthenticated ? (
          <>
            <DrawerItem
              label="Home"
              onPress={() => props.navigation.navigate("Home")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="home"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="Destinations"
              onPress={() => props.navigation.navigate("Destinations")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="airplane"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="Cart"
              onPress={() => props.navigation.navigate("Cart")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="cart"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="Blog"
              onPress={() => props.navigation.navigate("Blog")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="book"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="FAQ's"
              onPress={() => props.navigation.navigate("FAQ's")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="help-circle"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label={`Mode ${!props.isDarkMode ? "Dark" : "Light"}`}
              onPress={props.toggleDarkMode}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name={props.isDarkMode ? "sunny" : "moon"}
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="Logout"
              onPress={handleLogout}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="log-out"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
          </>
        ) : (
          <>
            <DrawerItem
              label="Home"
              onPress={() => props.navigation.navigate("Home")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="home"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="Sign In"
              onPress={() => props.navigation.navigate("Sign In")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="log-in"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label="Sign Up"
              onPress={() => props.navigation.navigate("Sign Up")}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name="person-add"
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
              )}
            />
            <DrawerItem
              label={`Mode ${!props.isDarkMode ? "Dark" : "Light"}`}
              onPress={props.toggleDarkMode}
              inactiveTintColor="#ffffff"
              labelStyle={
                props.isDarkMode
                  ? styles.drawerLabelLigth
                  : styles.drawerLabelBlack
              }
              icon={() => (
                <Ionicons
                  name={props.isDarkMode ? "sunny" : "moon"}
                  size={24}
                  color={props.isDarkMode ? "#D1F366" : "black"}
                />
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
  drawerLabelLigth: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginLeft: -16,
  },
  drawerLabelBlack: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginLeft: -16,
  },
});
