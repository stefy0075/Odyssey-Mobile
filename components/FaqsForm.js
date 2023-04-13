import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Button from "./Button";
import styles from "../styles/FAQs.style";
import { useNavigation } from '@react-navigation/native';

const FaqsForm = ({ onSignIn }) => {
  const navigation = useNavigation();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.center}>
        <View style={styles.title2}>
            <Text style={styles.text}>
            Send your query
            </Text>
        </View>
      <View style={styles.containerForm}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={mail}
          onChangeText={setMail}
        />       
      </View>
      <View style={styles.innerView}>
        <Button title="Send" onPress={console.log('pressed send')} />
      </View>
    </View>
  );
};

export default FaqsForm;