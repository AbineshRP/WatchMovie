import AppGradient from "@/component/AppGradient";
import { icons } from "@/constants/icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { ScrollView } from "react-native";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
const register = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <AppGradient colors={["#eafaf8", "#fff"]}>
      <SafeAreaView className="flex-1 px-2">
        <KeyboardAvoidingView
          className="flex-1 px-3"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <ScrollView>
              <View className="flex-1">
                <Pressable onPress={() => navigation.goBack()}>
                  <AntDesign
                    name="left"
                    className="mt-10 mb-10"
                    size={24}
                    color="#2a2a2a"
                  />
                </Pressable>
                <Text className="text-3xl font-semibold text-primary">
                  Set up your account
                </Text>
                <Text className="text-lg text-[#3f3f3f] mt-4">
                  Please complete all information to create your account on
                  MediDoor
                </Text>
                <View className="gap-3 mt-5">
                  <Text className="text-xl font-medium text-[#3f3f3f]">
                    Name
                  </Text>
                  <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
                    <TextInput
                      className="outline-none"
                      placeholder="Enter your Name"
                      keyboardType="default"
                      placeholderTextColor="#999"
                      style={{
                        borderRadius: 5,
                        width: "100%",
                        padding: 10,
                        backgroundColor: "#fff",
                      }}
                    />
                  </View>
                </View>
                <View className="gap-3 mt-5">
                  <Text className="text-xl font-medium text-[#3f3f3f]">
                    Email ID
                  </Text>
                  <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
                    <TextInput
                      className="outline-none"
                      placeholder="Enter your email"
                      placeholderTextColor="#999"
                      keyboardType="default"
                      style={{
                        borderRadius: 5,
                        width: "100%",
                        padding: 10,
                        backgroundColor: "#fff",
                      }}
                    />
                  </View>
                </View>
                <View className="gap-3 mt-5">
                  <Text className="text-xl font-medium text-[#3f3f3f]">
                    Phone Number
                  </Text>
                  <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
                    <Text className="text-lg text-[#3f3f3f]">+91</Text>
                    <TextInput
                      className="outline-none"
                      keyboardType="numeric"
                      placeholderTextColor="#999"
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
                  <View className="flex-row items-center justify-between bg-white px-4 py-2 shadow-sm rounded-md">
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
                        source={
                          isPasswordVisible ? icons.eye_on : icons.eye_off
                        }
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
                        width: "90%",
                        padding: 10,
                        backgroundColor: "#fff",
                      }}
                    />
                    <Pressable
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      <Image
                        source={
                          isPasswordVisible ? icons.eye_on : icons.eye_off
                        }
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
                <View className="flex-row items-center justify-center mt-5 gap-2">
                  <Text className="text-[#3f3f3f] text-center  ">
                    Already have an account?
                  </Text>
                  <Pressable
                    onPress={() => navigation.push("login")}
                    className="p-0 m-0"
                  >
                    <Text className="text-primary">Login</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </AppGradient>
  );
};

export default register;
