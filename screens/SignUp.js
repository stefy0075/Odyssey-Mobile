import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import styles from "../styles/SignUp.style.js";
import SignUpForm from "../components/SignUpForm.js";
import Logout from "../components/Logout.js";

export default class SignUp extends Component {
  render() {
    return (
      <ImageBackground
        source={styles.background.backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {/* <Logout/> */}
          <SignUpForm/>
        </View>
      </ImageBackground>
    );
  }
}
