import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import Constants from "expo-constants";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { data } from "../../utils/data";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Explore = (props: Props) => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  });
  const navigation = useNavigation();

  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setPosition({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      });
    })();
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={[tw`bg-white`, styles.container]}>
      <View style={tw`p-0`}>
        <MapView
          style={styles.map}
          initialRegion={position}
          
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
        >
          {data.locations?.map((item, index) => (
            <Marker
              key={index}
              onPress={() =>
                // @ts-ignore
                navigation.navigate("description",{
                  image: item.picture,
                  heading: item.name,
                  description: item.description,
                  _id: item._id,
                  location: item.loc
                })
              }
              title={item.name}
              description={item.description}
              coordinate={{
                longitude: item.loc.lon,
                latitude: item.loc.lat,
              }}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default Explore;

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
