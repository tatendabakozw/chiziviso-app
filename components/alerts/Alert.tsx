import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

type Props = {
  type: String;
  message: String;
};

const Alert = (props: Props) => {
  return (
    <View
      style={tw`${
        props.type === "error"
          ? "border-red-400 bg-red-100 "
          : "border-green-400 bg-green-100 "
      }  py-3 px-4 rounded-lg`}
    >
      <Text
        style={tw`${
          props.type === "error" ? "text-red-500 " : "text-green-500 "
        }  text-center text-sm capitalize`}
      >
        {props.message}
      </Text>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({});
