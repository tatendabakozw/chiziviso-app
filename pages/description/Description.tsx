import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type Props = {
  route: any;
};

const Description = ({ route }: Props) => {
  const { params } = route;
  const navigation = useNavigation();

  return (
    <View style={[tw`bg-slate-100`, styles.container]}>
      <View style={tw`flex flex-row items-center p-4`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`px-4 flex-1`}
        >
          <Feather name="chevron-left" size={24} color="#334155" />
        </TouchableOpacity>
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
              source={{ uri: params.image }}
              style={[
                tw`h-40 w-full w-full rounded-lg`,
                {
                  borderRadius: 25,
                },
              ]}
            />
          </View>
        </View>

        <Text
          style={tw`text-center text-3xl pt-4 pb-2 font-semibold text-slate-950`}
        >
          {params.heading}
        </Text>
        <View style={tw`bg-white p-4 rounded-lg mt-8`}>
          <Text style={tw` text-slate-700 text-center`}>
            {params.description}
          </Text>
        </View>
        <View style={tw`flex flex-row py-4`}>
          <View
            style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden mr-1`}
          >
            <View
              style={tw`bg-slate-200 rounded-l w-1/4 items-center justify-center`}
            >
              <Entypo name="phone" size={16} color="#334155" />
            </View>
            <View style={tw`bg-slate-50 w-3/4 justify-center`}>
              <Text style={tw`pl-4 text-sm font-semibold text-slate-700`}>
                +263771445411
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden ml-1`}
          >
            <View
              style={tw`bg-slate-200 rounded-l w-1/4 items-center justify-center`}
            >
              <Feather name="mail" size={16} color="#334155" />
            </View>
            <View style={tw` bg-white w-3/4 justify-center`}>
              <Text style={tw`pl-4 text-sm font-semibold text-slate-700`}>
                trewmane@gmail.com
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`bg-white h-80 w-full rounded-lg overflow-hidden mb-16`}>
          {/* <MapView
            style={styles.map}
            initialRegion={{
              latitude: params.location.lat,
              longitude: params.location.lon,
              latitudeDelta: 0.03,
              longitudeDelta: 0.03,
            }}
            showsUserLocation={true}
            provider={PROVIDER_GOOGLE}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            // zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
          >
            <Marker
              title="Yor are here"
              description="This is a description"
              coordinate={{
                latitude: params.location.lat,
                longitude: params.location.lon,
              }}
            />
          </MapView> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
