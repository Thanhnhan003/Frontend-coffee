import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ButomTabNav from "../components/ButomTabNav";
import ProductDetail from "../screens/ProductDetail";
import Categories from "../components/Categories";
import HomePage from "../screens/HomePage";
import Login from "../screens/Login";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="ButomTab"
        component={ButomTabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
