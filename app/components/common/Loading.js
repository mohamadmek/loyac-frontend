import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { colors } from "@config";

const Loading = () => {
  return (
    <View style={styles.background}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
});
