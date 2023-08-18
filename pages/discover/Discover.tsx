import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import React from "react";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Discover = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={tw`flex flex-row items-center p-4`}>
        <Text style={tw`text-3xl text-slate-950 font-semibold flex-1`}>
          Good afternoon
        </Text>
        <View style={tw`px-4`}>
          <Feather name="bell" size={24} color="#334155" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
          <Feather name="settings" size={24} color="#334155" />
        </TouchableOpacity>
      </View>
      <ScrollView style={tw`p-4`}>
        <View style={tw`flex flex-row items-center`}>
          <View style={tw`mr-4`}>
            <Entypo name="sound-mix" size={24} color="#64748b" />
          </View>
          <TextInput
            placeholder="Search"
            style={tw`p-2 rounded-lg border flex-1 border-slate-300`}
          />
        </View>
        <ScrollView horizontal style={tw` py-8`}>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Hardware</Text>
          </View>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Grocery</Text>
          </View>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Accommodation</Text>
          </View>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Auto Parts</Text>
          </View>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Liqour</Text>
          </View>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Clothing</Text>
          </View>
          <View style={tw`bg-slate-100 rounded-full py-2 px-3 mr-4`}>
            <Text style={tw`text-slate-700 font-semibold`}>Fast Foods</Text>
          </View>
        </ScrollView>
        <View style={tw`flex flex-row`}>
          <View
            style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden mr-1`}
          >
            <View
              style={tw`bg-slate-200 rounded-l w-1/3 items-center justify-center`}
            >
              <Feather name="globe" size={32} color="#334155" />
            </View>
            <View style={tw`bg-slate-100 w-2/3 justify-center`}>
              <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                Popular
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden ml-1`}
          >
            <View
              style={tw`bg-slate-200 rounded-l w-1/3 items-center justify-center`}
            >
              <Feather name="globe" size={32} color="#334155" />
            </View>
            <View style={tw`bg-slate-100 w-2/3 justify-center`}>
              <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                Popular
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`flex flex-row pt-2`}>
          <View
            style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden mr-1`}
          >
            <View
              style={tw`bg-slate-200 rounded-l w-1/3 items-center justify-center`}
            >
              <Feather name="globe" size={32} color="#334155" />
            </View>
            <View style={tw`bg-slate-100 w-2/3 justify-center`}>
              <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                Popular
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden ml-1`}
          >
            <View
              style={tw`bg-slate-200 rounded-l w-1/3 items-center justify-center`}
            >
              <Feather name="globe" size={32} color="#334155" />
            </View>
            <View style={tw`bg-slate-100 w-2/3 justify-center`}>
              <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                Popular
              </Text>
            </View>
          </View>
        </View>

        <Text style={tw`mt-8 text-slate-950 text-3xl font-semibold`}>
          You're offline
        </Text>
        <Text style={tw`text-slate-400 text-lg`}>
          Please connect to the internet
        </Text>
        <View style={tw`mt-8`}>
          <View>
            <Image
              source={require("../../assets/images/grocery.jpg")}
              style={tw`h-60 w-full rounded-lg`}
            />
            <Text style={tw`text-slate-950 font-semibold text-2xl pt-2`}>
              Vendor Mini Mart
            </Text>
            <Text style={tw`text-slate-400 text-lg`}>2.1 kilometers away</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`border border-slate-950 p-2 rounded-full mb-8 mt-4`}
            >
              <Text style={tw`text-slate-950 text-center p-1 text-lg`}>
                Visit
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require("../../assets/images/grocery.jpg")}
              style={tw`h-60 w-full rounded-lg`}
            />
            <Text style={tw`text-slate-950 font-semibold text-2xl pt-2`}>
              Vendor Mini Mart
            </Text>
            <Text style={tw`text-slate-400 text-lg`}>2.1 kilometers away</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={tw`border border-slate-950 p-2 rounded-full mb-8 mt-4`}
            >
              <Text style={tw`text-slate-950 text-center p-1 text-lg`}>
                Visit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
