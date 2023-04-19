import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/Blog.style.js";
import Button from "./Button.js";
import { useNavigation } from "@react-navigation/native";

const BlogCard = () => {
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
      <View style={styles.title2}>
        <Text style={styles.text1}>
          Choose the best flight for your next adventure
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleCard}>Tips for buying a flight</Text>
        <Text style={styles.text}>
          When looking for your air tickets, take into account the airport from
          which you depart and arrive, the price / duration of the flight, and
          the luggage included in your rate. Some cheap flights may have many
          stopovers and not include luggage. If your flight has stopovers, check
          if it involves a change of airport.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleCard}>Why buy your flight at Odyssey?</Text>
        <Text style={styles.text}>
          At Odyssey you can buy your air tickets at the best price and with the
          best financing. Get cheap flights to travel wherever you want and make
          the sky your limit. There is a wide variety of plane tickets, airlines
          and destinations so you can choose the one that suits you best. Find
          the best flights and get ready to travel!
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleCard}>
          What do you have to know about luggage?
        </Text>
        <Text style={styles.text}>
          Some airlines offer very low airfares, but they only include hand
          luggage. Before selecting your flight, check all the baggage
          information included, to know how many bags you can take. Remember
          that at Odyssey we offer you different service options so that you
          have an excellent flight experience.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleCard}>
          Where to see all the information of a flight?
        </Text>
        <Text style={styles.text}>
          When doing a flight search, you can see information on the departure
          and arrival times of each one, as well as the airports, the duration
          of the trip, the number and time of stopovers, the cabin class and the
          luggage included. Also know the final price of your air tickets and
          the forms of payment and financing available.
        </Text>
      </View>
    </View>
  );
};

export default BlogCard;
