import AppGradient from "@/component/AppGradient";
import { icons } from "@/constants/icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
const forgotpassword = () => {
  const navigation = useNavigation();

  return (
    <AppGradient colors={["#eafaf8", "#fff"]}>
      <SafeAreaView className="flex-1 px-2">
        <View className="flex-1 px-3">
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              className="mt-10 mb-10"
              size={24}
              color="#2a2a2a"
            />
          </Pressable>
          <Text className="text-3xl font-semibold text-primary">
            Forget Password
          </Text>
          <Text className="text-lg text-[#3f3f3f] mt-4">
            Please enter your email account to send the link verification to
            reset your password
          </Text>
          <View className="gap-3 mt-5">
            <Text className="text-xl font-medium text-[#3f3f3f]">Email ID</Text>
            <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
              <TextInput
                className="outline-none"
                placeholder="Enter your email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                style={{
                  borderRadius: 5,
                  width: "100%",
                  padding: 10,
                  backgroundColor: "#fff",
                }}
              />
            </View>
            <Pressable
              className="bg-primary py-4 px-4 rounded-md mt-5 w-full"
              onPress={() => navigation.push("newpassword")}
            >
              <Text className="text-white text-md text-center">Send Mail</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </AppGradient>
  );
};

export default forgotpassword;
