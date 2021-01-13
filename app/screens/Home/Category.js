import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@config";

const Category = ({ item, setCategoryID, fetchCategoriesByID, categoryID }) => {
  const { title, id } = item;

  return (
    <TouchableOpacity
      onPress={() => {
        fetchCategoriesByID(id);
        setCategoryID(id);
      }}
      style={{
        ...styles.container,
        backgroundColor: categoryID == id ? colors.grey : colors.lightBlue,
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    minWidth: 100,
    borderRadius: 20,
  },
});
