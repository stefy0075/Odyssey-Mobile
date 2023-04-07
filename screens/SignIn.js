import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../styles/SignIn.style.js';
import Form from '../components/Form.js'

export default class SignIn extends Component {
  render() {
    return (
      <ImageBackground source={styles.background.backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Form/>
      </View>
      </ImageBackground>
    );
  }
}