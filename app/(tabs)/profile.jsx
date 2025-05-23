import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppGradient from "@/component/AppGradient";
import { images } from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
const Profile = () => {
  return (
    <AppGradient colors={["#c5f0ec", "#eaf9f8", "#fafafa"]}>
      <ScrollView>
        <SafeAreaView className="flex-1">
          <StatusBar style="dark" />
          <View
            className="bg-white py-5 px-5 rounded-3xl shadow-sm mb-4"
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
              <Text className="text-3xl font-semibold text-gray-500">
                Markhan
              </Text>
              <TouchableOpacity className="bg-primary py-3 px-5 rounded-lg">
                <Text className="text-white text-center text-xl font-semibold">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <View className="flex-row items-center justify-between px-4 py-4">
                <View>
                  <View className="flex-col items-start justify-between mb-4">
                    <Text className="text-xl text-gray-600 font-semibold">
                      User ID
                    </Text>
                    <Text className="text-xl text-gray-500 font-bold">
                      MED-2025-0001
                    </Text>
                  </View>
                  <View className="flex-col items-start justify-between">
                    <Text className="text-xl text-gray-600 font-semibold">
                      Date of Birth
                    </Text>
                    <Text className="text-xl text-gray-500 font-bold">
                      31-12-1990
                    </Text>
                  </View>
                </View>
                <View>
                  <View className="flex-col items-start justify-between mb-4">
                    <Text className="text-xl text-gray-600 font-semibold">
                      Blood Type
                    </Text>
                    <Text className="text-xl text-gray-500 font-bold">
                      O+ve
                    </Text>
                  </View>
                  <View className="flex-col items-start justify-between">
                    <Text className="text-xl text-gray-600 font-semibold">
                      Contact number
                    </Text>
                    <Text className="text-xl text-gray-500 font-bold">
                      +1234567890
                    </Text>
                  </View>
                </View>
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
        </SafeAreaView>
      </ScrollView>
    </AppGradient>
  );
};

export default Profile;
