import React, { Component } from "react";
import { View, ImageBackground, Text, ScrollView} from "react-native";
import styles from "../styles/Blog.style.js";
import CardBlog from "../components/CardBlog.js";

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
        Travel without limits and make your dreams come true.
        </Text>
        <ScrollView style={styles.container}>
          <CardBlog />
        </ScrollView>
      </ScrollView>
      </ImageBackground>
    );
  }
}
