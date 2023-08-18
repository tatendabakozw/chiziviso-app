import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={[tw`h-full w-full bg-[#F75C03]`, styles.overview]}>
        <View style={tw`h-full w-full  `}>
          <View style={tw` py-16 px-4`}>
            <Text style={tw`text-white text-5xl`}>Sign in to your account</Text>
          </View>
          <View style={tw`flex-1 bg-white p-4`}>
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={tw`border border-slate-200 rounded-lg p-4 text-lg mb-8`}
              placeholder="Enter email/phone number"
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={tw`border border-slate-200 rounded-lg p-4 text-lg`}
              placeholder="Password"
            />
            <Text style={tw`pt-2 pb-8 text-right text-[#F75C03] pr-1`}>Forgot Password?</Text>
             <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Discover')} style={tw`bg-slate-950 p-2 rounded-full mb-8 mt-4`}>
              <Text style={tw`text-white text-center p-2 text-lg`}>
                Login
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
                  source={require("../../../assets/icons/google.png")}
                  style={tw`h-8 w-8 mr-1`}
                />
                <Text style={tw`text-slate-700 capitalize text-lg`}>
                  Google
                </Text>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <Image
                  source={require("../../../assets/icons/facebook.png")}
                  style={tw`h-8 w-8 mr-1`}
                />
                <Text style={tw`text-slate-700 capitalize text-lg`}>
                  Facebook
                </Text>
              </View>
            </View>
            <View style={tw`items-center  flex-1 justify-end mb-8`}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Register')} style={tw`flex flex-row items-center`}>
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

export default Login;

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
