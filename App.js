import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import { AuthProvider } from "./components/AuthProvider";

//npm install @react-navigation/native @react-navigation/bottom-tabs react-native-reanimated react-native-gesture-handler react-native-screens
//npm install @react-navigation/native @react-navigation/bottom-tabs react-native-reanimated react-native-gesture-handler react-native-screens

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
