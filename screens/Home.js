import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../styles/Home.style.js";
import Button from "../components/Button.js";

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={styles.backgroundHome.backgroundImage}
        style={styles.backgroundHome}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.text}>
            I'm a traveler and I want to find the best deals to travel
          </Text>
          <Button
            title="More"
            onPress={() => console.log("Presionaste el botón")}
          />
        </View>
      </ImageBackground>
    );
  }
}
