import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type Props = {};

const Settings = (props: Props) => {
  return (
    <View style={[tw`bg-slate-100`, styles.container]}>
      <View style={tw`flex flex-row items-center p-4`}>
        <View style={tw`px-4 flex-1`}>
          <Feather name="chevron-left" size={24} color="#334155" />
        </View>
      </View>
      <ScrollView style={tw`p-4 flex-1 `}>
        <View style={tw`flex h-50 w-full  self-center items-center`}>
          <View
            style={[
              tw`z-10 relative bg-blue-200 h-40 w-40  `,
              { borderRadius: 25 },
            ]}
          >
            <Image
              source={require("../../assets/images/user.jpg")}
              style={[tw`h-40 w-40 w-full rounded-lg`, {
                borderRadius: 25
              }]}
            />
            <View
              style={tw`z-50 absolute bg-slate-950 p-2 rounded-xl -right-3 -bottom-2`}
            >
              <Feather name="plus" size={24} color="#F75C03" />
            </View>
          </View>
        </View>

        <Text
          style={tw`text-center text-3xl pt-4 pb-2 font-semibold text-slate-950`}
        >
          Tatenda Bako
        </Text>
        <Text style={tw`text-sm text-slate-700 text-xs text-center`}>
          Click to edit
        </Text>

        <View style={tw`rounded-xl bg-white overflow-hidden mt-8`}>
          <SettingsItem
            icon={<Feather name="headphones" size={16} color="#475569" />}
            heading="Help"
            details="FAQs, Helpdesk"
          />
          <View style={tw`border-b border-slate-100`} />
          {/* <SettingsItem
            icon={<Feather name="headphones" size={16} color="#475569" />}
            heading="Help"
            details="FAQs, Helpdesk"
          /> */}
          <View style={tw`border-b border-slate-100`} />
          <SettingsItem
            icon={<Entypo name="address" size={16} color="#475569" />}
            heading="Address & Location"
            details="Home address, Work address"
          />
        </View>
      </ScrollView>
    </View>
  );
};

interface SettingsItemProps {
  icon: any;
  heading: string;
  details: string;
}

const SettingsItem = (props: SettingsItemProps) => {
  return (
    <View style={tw`flex flex-row items-center bg-white p-4`}>
      <View style={tw`pr-4`}>{props.icon}</View>
      <View style={tw`flex flex-col flex-1`}>
        <Text style={tw`text-lg font-semibold`}>{props.heading}</Text>
        <Text style={tw`text-xs text-slate-400`}>{props.details}</Text>
      </View>
      <View>
        <Entypo name="chevron-small-right" size={24} color="#475569" />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
