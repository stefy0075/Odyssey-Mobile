import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import basurero from "../assets/basurero.png";
import dollar from "../assets/dolar.png";
import PacketsActions from "../store/Packets/actions";

const { read_all } = PacketsActions;

function Cart() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [storedPackets, setStoredPackets] = useState([]);

  const getMode = async () => {
      const mode = await AsyncStorage.getItem('@mode');
      console.log(mode)
  };

  const toggleDarkMode = () => {
    getMode().then(mode => {
      setIsDarkMode(mode === 'dark');
      console.log('dark')
    }).catch(error => {
      console.log('Error al obtener el modo:', error);
    });
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(read_all());

      AsyncStorage.getItem("paquete").then((data) => {
        if (data) {
          const packets = JSON.parse(data);
          if (Array.isArray(packets)) {
            setStoredPackets(packets);
          } else {
            setStoredPackets([packets]);
          }
        }
      });
    }, [dispatch, reload])
  );

  const handleRemovePacket = (packetId) => {
    const packetIndex = storedPackets.findIndex((p) => p.id === packetId);

    if (packetIndex !== -1) {
      const newStoredPackets = [...storedPackets];
      newStoredPackets.splice(packetIndex, 1);
      setStoredPackets(newStoredPackets);

      AsyncStorage.setItem("paquete", JSON.stringify(newStoredPackets));
    }
  };

  const handleClearCart = () => {
    setStoredPackets([]);
    AsyncStorage.removeItem("paquete");
  };

  const totalPrice = storedPackets.reduce(
    (acc, packet) => acc + packet.price * packet.quantity,
    0
  );

  const handleBuy = async () => {
    const token = await AsyncStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .post("https://odyssey-back.onrender.com/buy", storedPackets, headers)
      .then((res) => {
        const { init_point } = res.data.response.body;
        Linking.canOpenURL(init_point).then((supported) => {
          if (supported) {
            Linking.openURL(init_point);
          } else {
            Linking.openURL(
              `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${init_point}`
            );
          }
        });
        AsyncStorage.removeItem("paquete");
        setTimeout(() => {
          setStoredPackets([]);
          Alert.alert("¡Compra realizada con éxito!", "", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }, 5000);
      })
      .catch((err) => console.error("aca esta el error", err));
  };

  return (
    <ScrollView style={styles.cont}>
      <View>
        {storedPackets.map((packet) => (
          <View key={packet.id}>
            <View style={styles.contPaquete}>
              <TouchableOpacity onPress={() => handleRemovePacket(packet.id)}>
                <Text style={styles.removeButton}>X</Text>
              </TouchableOpacity>
              <View style={styles.card}>
                <View style={styles.ContImg}>
                  <Image
                    style={styles.img}
                    source={{ uri: packet.cover_photo }}
                  />
                </View>
                <View style={styles.contText}>
                  <Text style={styles.title}>{packet.title}</Text>
                  <Text style={styles.text}>{packet.type}</Text>
                  <Text style={styles.text}>Quantity: {packet.quantity}</Text>
                  <Text style={styles.text}>Price: ${packet.price}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
        <Text style={styles.total}>Total: ${totalPrice}</Text>
        <View style={styles.btns}>
          {storedPackets.length > 0 && (
            <TouchableOpacity onPress={handleClearCart}>
              <Text style={styles.clearButton}>
                <Image source={basurero} style={styles.icon} />
                Remove
              </Text>
            </TouchableOpacity>
          )}

          {storedPackets.length > 0 && (
            <TouchableOpacity onPress={handleBuy}>
              <Text style={styles.buyButton}>
                <Image source={dollar} style={styles.icon} /> Buy
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contPaquete: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#262a47",
    borderRadius: 7,
    marginTop: 10,
  },
  cont: {
    backgroundColor: "#141627",
    height: "100%",
    display: "flex",
    alignContent: "center",
    width: "100%",
    padding: 20,
  },
  icon: {
    width: 16,
    height: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 10,
    color: "#FFFFFF",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: "#FFFFFF",
  },
  removeButton: {
    fontSize: 16,
    color: "#D1F366",
    marginBottom: 10,
    marginLeft: "95%",
    fontWeight: "bold",
  },
  clearButton: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#FF5733",
    padding: 10,
    marginTop: 20,
    marginRight: 20,
    alignSelf: "center",
    width: 100,
    textAlign: "center",
    borderRadius: 7,
  },
  buyButton: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#2ECC71",
    padding: 10,
    marginTop: 20,
    marginRight: 20,
    alignSelf: "center",
    width: 100,
    height: 40,
    textAlign: "center",
    borderRadius: 7,
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
    width: "100%",
    height: 100,
  },

  total: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    width: "100%",
    height: 100,
    display: "flex",
    marginTop: -20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  contText: {
    marginTop: -13,
    marginLeft: 20,
  },
  ContImg: {
    marginTop: -10,
    marginLeft: 5,
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: 5,
  },
});

export default Cart;
