import React, { Component } from "react";
import { View, ImageBackground, Text, ScrollView} from "react-native";
import styles from "../styles/FAQs.style.js";
import FAQs from "../components/FAQs.js";

export default class FAQS extends Component {
  render() {
    return (
      
      <ImageBackground
      source={styles.background.backgroundImage}
      style={styles.background}
      resizeMode="cover"
      >
        <ScrollView>
        <Text style={styles.title}>
        What can we help you?
        </Text>
        <View style={styles.container}>
          <FAQs />
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}
