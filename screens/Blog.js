import React, { Component } from "react";
import { ImageBackground, Text, ScrollView} from "react-native";
import styles from "../styles/Blog.style.js";
import BlogCard from "../components/BlogCard.js";

export default class Blog extends Component {
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
          <BlogCard />
        </ScrollView>
      </ScrollView>
      </ImageBackground>
    );
  }
}
