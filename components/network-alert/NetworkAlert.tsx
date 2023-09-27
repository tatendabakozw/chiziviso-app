import React, { useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { Text, View } from "react-native";
import tw from "twrnc";

type Props = {};

const NetworkAlert = (props: Props) => {
  const [networkStatus, setNetworkStatus] = useState<any>();

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkStatus(state);
      console.log(state);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View>
      {networkStatus?.isConnected ? (
        <>
          <Text style={tw`mt-8 text-slate-950 text-3xl font-semibold`}>
            You're Online
          </Text>
          <Text style={tw`text-slate-400 text-lg`}>
            Please enjoy using the app
          </Text>
        </>
      ) : (
        <>
          <Text style={tw`mt-8 text-slate-950 text-3xl font-semibold`}>
            You're offline
          </Text>
          <Text style={tw`text-slate-400 text-lg`}>
            Please connect to the internet
          </Text>
        </>
      )}
    </View>
  );
};

export default NetworkAlert;
