import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { apiUrl } from "../../../utils/apiUrl";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { getMessage } from "../../../helpers/getMessage";
import Alert from "../../../components/alerts/Alert";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const navigation = useNavigation();

  const login_user = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      setMsg(getMessage(data));
      setLoading(false);
      setTimeout(() => {
        // @ts-ignore
        navigation.navigate("Discover")
      }, 1500);
      setErr("");
    } catch (error: any) {
      setErr(getMessage(error));
      setLoading(false);
      setMsg("");
    }
  };

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
              onChangeText={setPassword}
              value={password}
              style={tw`border border-slate-200 rounded-lg p-4 text-lg`}
              placeholder="Password"
            />
            <Text style={tw`pt-2 pb-8 text-right text-[#F75C03] pr-1`}>
              Forgot Password?
            </Text>
            {msg && <Alert type={'success'} message={msg} />}
            {err && <Alert type={'error'} message={err} />}

            <PrimaryButton
              button_text="Login"
              button_action={login_user}
              loading={loading}
            />
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
