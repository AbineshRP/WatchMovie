import AppGradient from "@/component/AppGradient";
import { images } from "@/constants/images";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <AppGradient colors={["#c5f0ec", "#eaf9f8", "#fafafa"]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <SafeAreaView className="flex-1">
          <StatusBar style="dark" />
          <View
            className="bg-white py-5 px-5 rounded-2xl shadow-sm mb-4"
            style={{ width: "95%", alignSelf: "center" }}
          >
            <View
              className="flex flex-col items-center gap-3 p-5"
              style={{ borderBottomWidth: 0.3, borderBottomColor: "#117c6f" }}
            >
              <Image
                source={images.profile}
                className=""
                style={{ width: 70, height: 70 }}
              />
              <Text className="text-2xl font-semibold text-gray-500">
                Markhan
              </Text>
              <TouchableOpacity className="bg-primary py-3 px-5 rounded-lg">
                <Text className="text-white text-center font-semibold">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <View className="flex-row items-center justify-between px-4 py-4">
                <View>
                  <View className="flex-col items-start justify-between mb-4">
                    <Text className="text-gray-600 font-semibold">User ID</Text>
                    <Text className="text-gray-500 font-bold">
                      MED-2025-0001
                    </Text>
                  </View>
                  <View className="flex-col items-start justify-between">
                    <Text className="text-gray-600 font-semibold">
                      Date of Birth
                    </Text>
                    <Text className="text-gray-500 font-bold">31-12-1990</Text>
                  </View>
                </View>
                <View>
                  <View className="flex-col items-start justify-between mb-4">
                    <Text className="text-gray-600 font-semibold">
                      Blood Type
                    </Text>
                    <Text className="text-gray-500 font-bold">O+ve</Text>
                  </View>
                  <View className="flex-col items-start justify-between">
                    <Text className="text-gray-600 font-semibold">
                      Contact number
                    </Text>
                    <Text className="text-gray-500 font-bold">+1234567890</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <View
            className="bg-white py-4 px-5 rounded-3xl shadow-sm mb-4"
            style={{ width: "95%", alignSelf: "center" }}
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <View className="flex-col items-start justify-between">
                <Text className="text-xl text-gray-600 font-semibold">
                  Profile Information
                </Text>
              </View>
            </View>
          </View>
          <View
            className="bg-white py-4 px-5 rounded-3xl shadow-sm mb-4"
            style={{ width: "95%", alignSelf: "center" }}
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <View className="flex-col items-start justify-between">
                <Text className="text-xl text-gray-600 font-semibold">
                  Profile Information
                </Text>
              </View>
            </View>
          </View>
          <View
            className="bg-white py-4 px-5 rounded-3xl shadow-sm mb-4"
            style={{ width: "95%", alignSelf: "center" }}
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <View className="flex-col items-start justify-between">
                <Text className="text-xl text-gray-600 font-semibold">
                  Profile Information
                </Text>
              </View>
            </View>
          </View>
          <View
            className="bg-white py-4 px-5 rounded-3xl shadow-sm mb-4"
            style={{ width: "95%", alignSelf: "center" }}
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <View className="flex-col items-start justify-between">
                <Text className="text-xl text-gray-600 font-semibold">
                  Profile Information
                </Text>
              </View>
            </View>
          </View>
          <View
            className="bg-white py-4 px-5 rounded-3xl shadow-sm mb-4"
            style={{ width: "95%", alignSelf: "center" }}
          >
            <View className="flex-row items-center justify-between px-4 py-4">
              <View className="flex-col items-start justify-between">
                <Text className="text-xl text-gray-600 font-semibold">
                  Profile Information
                </Text>
              </View>
            </View>
          </View> */}
          <Pressable
            className=" text-gray-600 font-semibold"
            onPress={() => router.replace("/(auth)/welcome")}
          >
            <View
              className="bg-white py-5 px-5 rounded-lg shadow-sm mb-4"
              style={{ width: "95%", alignSelf: "center" }}
            >
              <Text className="text-gray-600 font-semibold">Log Out</Text>
            </View>
          </Pressable>
        </SafeAreaView>
      </ScrollView>
    </AppGradient>
  );
};

export default Profile;
