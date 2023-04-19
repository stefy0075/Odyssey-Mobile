import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "./Button";
import styles from "../styles/FAQs.style";

const Form = ({ onSignIn }) => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleSignIn = async () => {
    let data = {
      name: name,
      mail: mail,
      question: question,
    };
    console.log(data);
  };
  return (
    <View style={styles.containerGeneralForm}>
      <View style={styles.title2}>
        <Text style={styles.text}>Send your query</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={mail} onChangeText={setMail} />
        <Text style={styles.label}>Your Question</Text>
        <TextInput
          value={question}
          onChangeText={setQuestion}
          style={styles.input2}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.innerView}>
        <Button title="Submit" onPress={handleSignIn} />
      </View>
    </View>
  );
};

export default Form;
