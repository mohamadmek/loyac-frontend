import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

// blue #189AD5
// Green #92D0BC
// light blue #98C3E7
// light green #C7E6DA
const main = () => {
  const [loading, setLoading] = useState(true);
  const Stack = createStackNavigator();

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default main;

const styles = StyleSheet.create({});
