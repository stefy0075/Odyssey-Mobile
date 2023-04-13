import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/Blog.style.js";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

const FAQs = () => {
  const navigation = useNavigation();

  const handleMore = () => {
    navigation.navigate("Destinations");
  };
  return (
    <View style={styles.center}>
      <View style={styles.card}>
        <Image source={require("../assets/card.jpg")} style={styles.image} />
        <Text style={styles.text}>
          If you have not yet defined your destination, you may be interested in
          seeing our offers section.
        </Text>
        <Button title="More" onPress={handleMore} />
      </View>
 </View>
  );
};

export default FAQs;
