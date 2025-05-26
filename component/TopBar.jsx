import { icons } from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "expo-router";
const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center mx-2 mb-5">
      <View className="flex-row items-center gap-3">
        <Image source={icons.location} tintColor={"#000"} className="size-8" />
        <View>
          <Text className="font-semibold">Theni</Text>
          <Text className="text-gray-700">Usilampatti, Periyakulam....</Text>
        </View>
      </View>
      <View className="flex-row justify-between gap-3">
        <Pressable onPress={() => router.push("/cart")}>
          <Image source={icons.cart} className="size-8" tintColor={"#000"} />
        </Pressable>
        <Image source={icons.bell} className="size-8" tintColor={"#000"} />
      </View>
    </View>
  );
};

export default TopBar;
