import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SplashLogo from "../../assets/images/SplashLogo.png";
import { colors } from "@config";

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={[colors.grey, colors.green, colors.blue]}
      style={styles.linearGradient}
    >
      <Image resizeMode="contain" style={styles.image} source={SplashLogo} />
      <Text style={styles.text}>The world in one place!</Text>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#033C5A",
  },
});
