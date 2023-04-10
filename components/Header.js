import React from "react";
import { Image, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: 320,
      }}
    >
      <Image
        source={require("../assets/logo3.png")}
        style={{ height: 30, width: 100, resizeMode: "contain" }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "white",
          marginRight: 10,
        }}
      >
        Odyssey
      </Text>
    </View>
  );
}
