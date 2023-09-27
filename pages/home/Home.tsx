import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import axios from "axios";
import { apiUrl } from "../../utils/apiUrl";
import { getMessage } from "../../helpers/getMessage";

type Props = {};

const Home = (props: Props) => {
  const navigation = useNavigation();
 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[tw`h-full w-full bg-[#F75C03]`, styles.overview]}>
        <View style={tw`h-full w-full  `}>
          <View style={tw`h-1/2 relative items-center justify-center`}>
            <View
              style={tw`absolute bg-[#DAA88C] h-full w-full rounded-br-full -top-15 -left-15`}
            />
            <Text style={tw`text-white text-5xl`}>Chiziviso</Text>
          </View>
          <View style={tw`h-1/2 bg-white p-4`}>
            <TouchableOpacity
              activeOpacity={0.8}
              // @ts-ignore
              onPress={() => navigation.navigate("Login")}
              style={tw`bg-slate-950 p-2 rounded-full mb-8 mt-4`}
            >
              <Text style={tw`text-white text-center p-2 text-lg`}>
                Continue with email
              </Text>
            </TouchableOpacity>
            <View style={tw`flex flex-row items-center px-4 mb-8`}>
              <View style={tw`border-b border-slate-300 flex-1`} />
              <Text style={tw`px-4 text-slate-700 font-semibold`}>Or</Text>
              <View style={tw`border-b border-slate-300 flex-1`} />
            </View>
            <View style={tw`flex justify-around flex-row items-center mb-8`}>
              <View style={tw`flex flex-row items-center`}>
                <Image
                  source={require("../../assets/icons/google.png")}
                  style={tw`h-8 w-8 mr-1`}
                />
                <Text style={tw`text-slate-700 capitalize text-lg`}>
                  Google
                </Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Image
                  source={require("../../assets/icons/facebook.png")}
                  style={tw`h-8 w-8 mr-1`}
                />
                <Text style={tw`text-slate-700 capitalize text-lg`}>
                  Facebook
                </Text>
              </View>
            </View>
            <View style={tw`items-center  flex-1 justify-end mb-8`}>
              <TouchableOpacity
                activeOpacity={0.8}
                // @ts-ignore
                onPress={() => navigation.navigate("Register")}
                style={tw`flex flex-row items-center`}
              >
                <Text style={tw`text-slate-700`}>Dont have an account?</Text>
                <Text style={tw`text-[#F75C03] pl-1`}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overview: {
    paddingTop: Constants.statusBarHeight,
  },
});
