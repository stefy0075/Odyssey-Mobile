import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./Button";
import styles from "../styles/SignIn.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const Form = ({ onSignIn }) => {
  const navigation = useNavigation();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    let data = {
      mail: mail,
      password: password,
    };
    console.log(data);

    let url = "https://odyssey-back.onrender.com/users/signin";

    try {
      const res = await axios.post(url, data);
      console.log("funcionó");

      const token = res.data.token;
      console.log(token);
      await AsyncStorage.setItem("token", token);
      Alert.alert("¡Usuario Online!", "Bienvenido", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1000);
      setMail('')
      setPassword('')
    } catch (error) {
      let err = error;
      console.log("Ocurrió un error: " + err);
      Alert.alert(
        "Ooops, something went wrong!",
        "Credenciales incorrectas",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    }
  };

  return (
    <View style={styles.center}>
      <View style={styles.containerForm}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={setMail}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            {showPassword ? (
              <Ionicons name="eye-off" size={24} color="white" />
            ) : (
              <Ionicons name="eye" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innerView}>
        <Button title="Sign In" onPress={handleSignIn} />
      </View>
    </View>
  );
};

export default Form;
