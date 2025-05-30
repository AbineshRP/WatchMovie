import AppGradient from "@/component/AppGradient";
import { icons } from "@/constants/icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { useNavigation } from "expo-router";

import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
const newpassword = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <AppGradient colors={["#fff4d3", "#fff"]}>
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
            New Password
          </Text>
          <Text className="text-lg text-[#3f3f3f] mt-4">
            Create a strong password for updating m******n@gmail.com
          </Text>
          <View className="gap-3 mt-5">
            <Text className="text-xl font-medium text-[#3f3f3f]">Password</Text>
            <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
              <TextInput
                className="outline-none"
                placeholder="Enter your New Password"
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor="#999"
                style={{
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "#fff",
                }}
              />
              <Pressable
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Image
                  source={isPasswordVisible ? icons.eye_on : icons.eye_off}
                  className="size-6"
                />
              </Pressable>
            </View>
          </View>
          <View className="gap-3 mt-5">
            <Text className="text-xl font-medium text-[#3f3f3f]">
              Confirm Password
            </Text>
            <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
              <TextInput
                className="outline-none"
                placeholder="Enter your Confirm Password"
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor="#999"
                style={{
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: "#fff",
                }}
              />
              <Pressable
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Image
                  source={isPasswordVisible ? icons.eye_on : icons.eye_off}
                  className="size-6"
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            className="bg-primary py-4 px-4 rounded-md mt-5 w-full"
            onPress={() => navigation.push("login")}
          >
            <Text className="text-white text-md text-center">Submit</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </AppGradient>
  );
};

export default newpassword;
