import { icons } from "@/constants/icons";
import React, { useState } from "react";
import { Image, Text, View, TextInput } from "react-native";

const SearchBox = ({searchQuery , setSearchQuery }) => {

  return (
    <View
      className="w-full p-5 mb-5 bg-white rounded-md flex-row items-center "
      style={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <View className="flex flex-row items-center justify-between flex-1">
        <Image source={icons.search} />
        <TextInput
          style={{
            backgroundColor: "#fff",
            flex: 1,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "start",
            paddingHorizontal: 15,
            color: "#000",
          }}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for medicines, doctors, hospitals..."
           placeholderTextColor="#7e7e7e"
           keyboardType="default"
        />
        <Image source={icons.line} style={{ marginHorizontal: 10 }} />
        <Image source={icons.filter} />
      </View>
    </View>
  );
};

export default SearchBox;
