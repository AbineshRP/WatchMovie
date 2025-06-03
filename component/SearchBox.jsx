import { icons } from "@/constants/icons";
import React, { useState } from "react";
import { Image, Text, View, TextInput } from "react-native";

const SearchBox = ({searchQuery , setSearchQuery }) => {

  return (
    <View
      className="w-full px-3 py-4 mb-5 bg-white rounded-md flex-row items-center "
      style={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <View className="flex flex-row items-center justify-between flex-1">
        <Image source={icons.search} className = "size-6"/>
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
        <Image source={icons.line} style={{ marginHorizontal: 10 , width: 2 , height: 20 }}/>
        <Image source={icons.filter} className = "size-6"/>
      </View>
    </View>
  );
};

export default SearchBox;
