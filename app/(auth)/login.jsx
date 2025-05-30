import AppGradient from "@/component/AppGradient";
import { icons } from "@/constants/icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useState } from "react";
import { useNavigation } from "expo-router";

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
const Login = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <AppGradient colors={["#fff4d3", "#fff"]}>
      <SafeAreaView className="flex-1 px-2">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 px-3"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-1">
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign
                  name="left"
                  className="mt-10 mb-10"
                  size={24}
                  color="#2a2a2a"
                />
              </Pressable>
              <Text className="text-3xl font-semibold text-primary">Login</Text>
              <Text className="text-lg text-[#3f3f3f] mt-4">
                Please complete all information to create your account on Level
              </Text>
              <View className="gap-3 mt-5">
                <Text className="text-xl font-medium text-[#3f3f3f]">
                  Email ID
                </Text>
                <View className="flex-row items-center justify-between bg-white px-2 py-2 shadow-sm rounded-md">
                  <TextInput
                    className="outline-none"
                    placeholder="Enter your email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    style={{
                      borderRadius: 5,
                      padding: 10,
                      width: "100%",
                      backgroundColor: "#fff",
                    }}
                  />
                </View>
              </View>
              <View className="gap-3 mt-5">
                <Text className="text-xl font-medium text-[#3f3f3f]">
                  Password
                </Text>
                <View className="flex-row items-center justify-between bg-white px-2 py-2 shadow-sm rounded-md">
                  <TextInput
                    className="outline-none"
                    placeholder="Enter your Password"
                    secureTextEntry={!isPasswordVisible}
                    placeholderTextColor="#999"
                    style={{
                      borderRadius: 5,
                      padding: 10,
                      width: "90%",
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
                className="mt-5"
                onPress={() => navigation.push("forgotpassword")}
              >
                <Text className="text-[#3f3f3f] text-right">
                  Forgot Password?
                </Text>
              </Pressable>
              <Pressable
                className="bg-primary py-4 px-4 rounded-md mt-5 w-full"
                onPress={() => router.replace("/(tabs)")}
              >
                <Text className="text-white text-md text-center">Login</Text>
              </Pressable>
              <View className="flex-row items-center justify-center mt-5 gap-2">
                <Text className="text-[#3f3f3f] text-center  ">
                  Don’t have an account?
                </Text>
                <Pressable
                  onPress={() => navigation.push("register")}
                  className="p-0 m-0"
                >
                  <Text className="text-primary">Sign up</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </AppGradient>
  );
};

export default Login;
