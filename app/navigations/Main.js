import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import AddPost from "../screens/AddPost/AddPost";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const main = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const Stack = createStackNavigator();

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <SplashScreen />;
  }

  const Tab = createBottomTabNavigator();

  const TabsNavigator = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddPost" component={AddPost} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token == "" ? (
          <>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} setToken={setToken} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen options={{ title: "Home" }} name="TabsNavigator">
              {(props) => <TabsNavigator {...props} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default main;

const styles = StyleSheet.create({});
