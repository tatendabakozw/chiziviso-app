import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import React from "react";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";

type Props = {};

const Payment = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={tw`flex flex-row items-center p-4`}>
        <View style={tw`px-4 flex-1`}>
          <Feather name="chevron-left" size={24} color="#334155" />
        </View>
        <View style={tw`px-4`}>
          <Feather name="bell" size={24} color="#334155" />
        </View>
      </View>
      <ScrollView style={tw`p-4`}></ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
