import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "@config";
import moment from "moment";

const Post = ({ item }) => {
  const { title, description, image, date } = item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{moment(date).format("MMM-DD-YY")}</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: colors.lightBlue,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#fff",
    marginTop: 3,
  },
});
