import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Button from "./Button";
import styles from "../styles/FAQs.style.js";
import FaqAccordion from "./faqAccordion";
import Form from "./FaqsForm.js";

const FAQs = () => {
  return (
    <View style={styles.center}>
      <View style={styles.title2}>
        <Text style={styles.text}>More Frecuent Questions</Text>
      </View>
      <FaqAccordion />
      <View>
        <Form />
      </View>
    </View>
  );
};

export default FAQs;
