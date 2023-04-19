import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Footer.style.js";

export default function Footer() {
  return (
    <View style={styles.containerGeneral}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: 320,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            width: 320,
          }}
        >
          <Image
            source={require("../assets/logo3.png")}
            style={{
              height: 30,
              width: 100,
              resizeMode: "contain",
              marginBottom: 20,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Odyssey@gmail.com
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            +54 123456789
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginBottom: 20,
            }}
          >
            New York
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Ionicons
              name="logo-facebook"
              size={20}
              color="white"
              style={{ objectFit: "contain", margin: 5 }}
            />
            <Ionicons
              name="logo-instagram"
              size={20}
              color="white"
              style={{ objectFit: "contain", margin: 5 }}
            />
            <Ionicons
              name="logo-linkedin"
              size={20}
              color="white"
              style={{ objectFit: "contain", margin: 5 }}
            />
            <Ionicons
              name="logo-twitter"
              size={20}
              color="white"
              style={{ objectFit: "contain", margin: 5 }}
            />
            <Ionicons
              name="logo-whatsapp"
              size={20}
              color="white"
              style={{ objectFit: "contain", margin: 5 }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "white",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            Tipes
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Tourist activities
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Tourist packages
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Travel without limits
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Fascinating destinations
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Your next destination
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: "white",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            Devs
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Alexis Franco
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Juan Rivera
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Eliana Guarino
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Agustín Pereyra
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
            }}
          >
            Pilar Villareal
          </Text>
        </View>
      </View>
    </View>
  );
}
