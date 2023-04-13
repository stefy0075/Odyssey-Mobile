import React, { useRef } from "react";
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import styles from "../styles/Home.style.js";
import Button from "../components/Button.js";
import GradientBackground from "../components/Gradient.js";
import Footer from "../components/Footer.js";

export default function Home() {
    const scrollViewRef = useRef();
    const { height } = Dimensions.get("window");

    return (
        <ScrollView contentContainerStyle={styles.scrollView} ref={scrollViewRef}>
            <ImageBackground
                source={styles.backgroundHome.backgroundImage}
                style={styles.backgroundHome}
                resizeMode="cover"
            >
                <View style={{ height: height * 1 }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            I'm a traveler and I want to find the best deals to travel
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                scrollViewRef.current.scrollTo({ y: 400, animated: true })
                            }
                        >
                            <Button
                                title="More"
                                onPress={() =>
                                    scrollViewRef.current.scrollTo({ y: 800, animated: true })
                                }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}>
                    <GradientBackground
                        startColor={"#0D7C74"}
                        endColor={"#141627"}
                        style={styles.gradient}
                    />
                </View>
            </ImageBackground>
            <ScrollView
                style={styles.section}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
            >
                <Image
                    source={require("../assets/Carousel1.jpg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/Carousel2.jpg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/Carousel3.jpg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/Carousel4.jpg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/Carousel5.jpg")}
                    style={styles.image}
                />
                <Image
                    source={require("../assets/Carousel6.jpg")}
                    style={styles.image}
                />
            </ScrollView>
            <View style={styles.line2}>
                <GradientBackground
                    startColor={"#141627"}
                    endColor={"#084E49"}
                    style={styles.gradient}
                />
            </View>
            <View style={styles.line3}>
                <GradientBackground
                    startColor={"#084E49"}
                    endColor={"#141627"}
                    style={styles.gradient}
                />
            </View>
            <ScrollView style={styles.section}>
                <View style={styles.section3}>

                </View>
                <View style={styles.section3}>
                    <Text style={styles.titleSection3}>Don't miss anyone promotion</Text>
                    <Image
                        source={require("../assets/celular.png")}
                        style={styles.imageSection3}
                    />
                    <Text style={styles.textSection3}>
                        You can cancel your purchases* made online or by phone within a
                        maximum period of 10 days from the date you made the purchase
                    </Text>
                    <Button title="More" />
                </View>

                <View style={styles.section3}>
                    <Text style={styles.titleSection3}>Tourist activities</Text>
                    <Image
                        source={require("../assets/isla.png")}
                        style={styles.imageSection3}
                    />
                    <Text style={styles.textSection3}>
                        Are you planning a trip? At Almundo we bring you the best
                        activities, walks, excursions and tours with promotions so that you
                        can enjoy the main tourist attractions of your next destination to
                        the fullest.
                    </Text>
                    <Button title="More" />
                </View>

                <View style={styles.section3}>
                    <Text style={styles.titleSection3}>Discover cities</Text>
                    <Image
                        source={require("../assets/ciudades.png")}
                        style={styles.imageSection3}
                    />
                    <Text style={styles.textSection3}>
                        If you like to travel, nothing better than doing it with the
                        greatest peace of mind. At Almundo, together with Assist Card, we
                        have the best travel assistance plans for any destination you visit.
                        Did you know that there are destinations with mandatory travel
                        insurance? Here you can find them at the best price and with
                        financing options. If you are looking for travel insurance for
                        Europe, America, Asia or any destination
                    </Text>
                    <Button title="More" />
                </View>
            </ScrollView>
            <Footer />
        </ScrollView>
    );
}
