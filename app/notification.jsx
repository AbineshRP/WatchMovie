import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppGradient from "@/component/AppGradient";
import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
const notification = () => {
  const navigation = useNavigation();
  return (
    <AppGradient colors={["#fff4d3", "#fafafa", "#fafafa"]}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4 py-4">
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="left" className="" size={24} color="#2a2a2a" />
          </Pressable>
          <View className="flex-1 items-center justify-center">
            <Image
              source={icons.BigBell}
              className="size-40"
              resizeMode="contain"
            />
            <Text className="text-xl font-semibold text-primary">
              No message notifications!
            </Text>
            <Text className=" text-[#3f3f3f] text-center">
              Looks like you haven’t receive any notifications.
            </Text>
            <Pressable
              className="bg-primary py-4 px-5 rounded-md mt-5"
              onPress={() => router.push("/index")}
            >
              <Text className="text-white">Return to Home</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </AppGradient>
  );
};

export default notification;
