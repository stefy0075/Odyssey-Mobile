import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "./Button";
import styles from "../styles/SignUp.style";

const RegisterForm = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    // lógica de inicio de sesión
    onSignUp({ email, password });
  };

  return (
    <View style={styles.center}>
      <View style={styles.containerForm}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Photo</Text>
        <TextInput style={styles.input} value={photo} onChangeText={setPhoto} />
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
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.iconContainer}
          >
            {showConfirmPassword ? (
              <Ionicons name="eye-off" size={24} color="white" />
            ) : (
              <Ionicons name="eye" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.innerView}>
        <Button title="Sign up" onPress={handleSignUp} />
      </View>
    </View>
  );
};
export default RegisterForm;
