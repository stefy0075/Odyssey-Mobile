import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';
import styles from '../styles/SignIn.style';

const Form = ({ onSignIn }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);


const handleSignIn = () => {
// lógica de inicio de sesión
onSignIn({ email, password });
};

return (
<View style={styles.center}>
<View style={styles.containerForm}>
  <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
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
      style={styles.iconContainer}>
      {showPassword ? (
        <Ionicons name="eye-off" size={24} color="white" />
      ) : (
        <Ionicons name="eye" size={24} color="white" />
      )}
    </TouchableOpacity>
  </View>
</View>
  <View style={styles.innerView}>
      <Button title="Sign In" onPress={handleSignIn}/>
  </View>
</View>
);
};

export default Form;