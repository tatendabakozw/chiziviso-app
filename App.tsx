import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./components/navigation/Tabs";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Discover: undefined;
  Payment: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}
