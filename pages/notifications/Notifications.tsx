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

const Notifications = (props: Props) => {
  return (
    <View style={[tw`bg-white`, styles.container]}>
      <View style={tw`flex flex-row items-center p-4`}>
        <View style={tw`flex flex-row items-center p-4`}>
          <Text style={tw`text-3xl text-slate-950 font-semibold flex-1`}>
            Notifications
          </Text>
        </View>
      </View>
      <ScrollView style={tw`p-4`}>
      <Text style={tw`text-center text-slate-700 font-semibold`}>No new notifications</Text>

      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
