import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
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
  <TextInput
     style={styles.input}
     secureTextEntry
     value={password}
     onChangeText={setPassword}
   />   
   <CheckBox
      title={'Show password'}
      style={styles.checkBox}
      checked={showPassword}
      onPress={() => setShowPassword(!showPassword)}
    />
</View>
<View style={styles.innerView}>
    <Button title="Sign In" onPress={handleSignIn}/>
</View>
</View>
);
};

export default Form;