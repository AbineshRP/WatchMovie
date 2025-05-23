import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const SearchBox = () => {
  return (
    <View
      className="w-full p-5 mb-5 bg-white rounded-md flex-row items-center "
      style={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <View className="flex flex-row items-center justify-between flex-1">
        <Image source={icons.search} />
        <Text style={{ color: "#6e6e6e" }}>
          Search for medicines, doctors, hospitals...
        </Text>
        <Image source={icons.line}/>
        <Image source={icons.filter}/>
      </View>
    </View>
  );
};

export default SearchBox;
