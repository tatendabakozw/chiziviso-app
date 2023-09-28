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
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NetworkAlert from "../../components/network-alert/NetworkAlert";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { apiUrl } from "../../utils/apiUrl";
import { getMessage } from "../../helpers/getMessage";
import * as Location from "expo-location";
import { data } from "../../utils/data";

type Props = {};

const Discover = (props: Props) => {
  const navigation = useNavigation();

  const [locationError, setLocationError] = useState("");
  const [near_locations, setNearLocations] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [searchedItem, setSearchedItem] = useState<any>();

  const filter_items = [
    { name: "Attractions" },
    { name: "Amenities" },
    { name: "Accommodation" },
    { name: "Auto Parts" },
    { name: "Liqour" },
    { name: "Clothing" },
    { name: "Restaurants" },
  ];

  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchWeatherData = async (latitude: number, longitude: number) => {
  //     try {
  //       const { data } = await axios.post(`${apiUrl}/api/location/near`, {
  //         lon: longitude,
  //         lat: latitude,
  //       });
  //       setNearLocations(data);
  //       setLoading(false);
  //       // console.log(weatherData.main.temp);
  //     } catch (error: any) {
  //       setLoading(false);
  //       console.error("Error fetching weather data:", getMessage(error));
  //     }
  //   };

  //   const getLocation = async () => {
  //     try {
  //       let { status } = await Location.requestForegroundPermissionsAsync();

  //       if (status !== "granted") {
  //         setLocationError("Location permission denied");
  //         return;
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       fetchWeatherData(location.coords.latitude, location.coords.longitude);
  //       // fetchWeatherData(-17.3402454,30.2159193)
  //     } catch (error) {
  //       setLoading(false);
  //       console.error("Error requesting location permission:", error);
  //     }
  //   };

  //   getLocation();
  // }, []);

  // console.log("get location error -------- ", locationError);
  // console.log(near_locations);

  const search_items = () => {
    // setSearchedItem(data.locations.filter((item) => item.name == query));
    setSearchedItem(
      data.locations.filter((obj) =>
        JSON.stringify(obj)
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      )
    );

    console.log(searchedItem);
  };

  return (
    <View style={[tw`bg-white pb-24`, styles.container]}>
      <View style={tw`flex flex-row items-center p-4`}>
        <Text style={tw`text-3xl text-slate-950 font-semibold flex-1`}>
          Good afternoo
        </Text>
      </View>
      <ScrollView style={tw`p-4`}>
        <View style={tw`flex flex-row items-center`}>
          <View style={tw`mr-4`}>
            <Entypo name="sound-mix" size={24} color="#64748b" />
          </View>
          <TextInput
            onChangeText={setQuery}
            value={query}
            placeholder="Search"
            style={tw`p-2 rounded-lg border flex-1 border-slate-300`}
          />
          <TouchableOpacity
            onPress={search_items}
            activeOpacity={0.7}
            style={tw`bg-slate-950 p-2 rounded-lg ml-4`}
          >
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal style={tw` py-8`}>
          {filter_items?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                setSearchedItem(
                  data.locations.filter((obj) =>
                    JSON.stringify(obj)
                      .toLowerCase()
                      .includes(item.name.toString().toLowerCase())
                  )
                )
              }
              key={index}
              style={tw`bg-slate-50 rounded-full py-2 px-3 mr-4`}
            >
              <Text style={tw`text-slate-700 font-semibold`}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {searchedItem?.length >= 1 ? (
          <>
            <Text style={tw`mt-8 text-slate-950 text-3xl font-semibold`}>
              Searched Results
            </Text>
            <Text style={tw`text-slate-400 text-lg pb-9`}>
              This is what you searched for
            </Text>
            {searchedItem?.map((item: any, index: number) => (
              <LocationItem
                image_src={item.picture}
                heading={item.name}
                _id={item._id}
                key={index}
                distance={item.distance}
                location={item.loc}
                description={item.description}
              />
            ))}

            <View style={tw`border-t border-slate-200 w-full`} />
          </>
        ) : (
          <>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden mr-1`}
              >
                <View
                  style={tw`bg-slate-100 rounded-l w-1/3 items-center justify-center`}
                >
                  <Entypo name="globe" size={32} color="#334155" />
                </View>
                <View style={tw`bg-slate-50 w-2/3 justify-center`}>
                  <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                    Popular
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  setSearchedItem(
                    data.locations.filter((obj) =>
                      JSON.stringify(obj).toLowerCase().includes("ancilliary")
                    )
                  )
                }
                style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden ml-1`}
              >
                <View
                  style={tw`bg-[#bbf7d0] rounded-l w-1/3 items-center justify-center`}
                >
                  <MaterialIcons name="healing" size={32} color="#15803d" />
                </View>
                <View style={tw`bg-[#dcfce7] w-2/3 justify-center`}>
                  <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                    Ancilliary
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={tw`flex flex-row pt-2`}>
              <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                setSearchedItem(
                  data.locations.filter((obj) =>
                    JSON.stringify(obj).toLowerCase().includes("fun")
                  )
                )
              }
                style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden mr-1`}
              >
                <View
                  style={tw`bg-[#fed7aa] rounded-l w-1/3 items-center justify-center`}
                >
                  <MaterialCommunityIcons
                    name="party-popper"
                    size={32}
                    color="#c2410c"
                  />
                </View>
                <View style={tw`bg-[#ffedd5] w-2/3 justify-center`}>
                  <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                    Fun
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={tw`flex-1 flex flex-row h-16 rounded overflow-hidden ml-1`}
              >
                <View
                  style={tw`bg-[#bfdbfe] rounded-l w-1/3 items-center justify-center`}
                >
                  <AntDesign name="customerservice" size={32} color="#1d4ed8" />
                </View>
                <View style={tw`bg-[#dbeafe] w-2/3 justify-center`}>
                  <Text style={tw`pl-4 text-xl font-semibold text-slate-700`}>
                    Accessibility
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
        <NetworkAlert />
        <View style={tw`mt-8`}>
          {data?.locations?.map((item: any, index: number) => (
            <LocationItem
              image_src={item.picture}
              heading={item.name}
              _id={item._id}
              key={index}
              distance={item.distance}
              location={item.loc}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

interface LocationItemProps {
  image_src: string | any;
  heading: string;
  _id: string;
  distance: any;
  description: string;
  location: any;
}

const LocationItem = (props: LocationItemProps) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={{ uri: props.image_src ? props.image_src : null }}
        style={tw`h-60 w-full rounded-lg bg-slate-100`}
      />
      <Text style={tw`text-slate-950 font-semibold text-2xl pt-2`}>
        {props.heading}
      </Text>
      <Text style={tw`text-slate-400 text-lg`}>
        {props.distance.toString().substring(0, 4)} kilometers away
      </Text>
      <TouchableOpacity
        onPress={() =>
          // @ts-ignore
          navigation.navigate("description", {
            image: props.image_src,
            heading: props.heading,
            _id: props._id,
            description: props.description,
            location: props.location,
          })
        }
        activeOpacity={0.8}
        style={tw`border border-slate-950 p-2 rounded-full mb-8 mt-4`}
      >
        <Text style={tw`text-slate-950 text-center p-1 text-lg`}>Visit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
