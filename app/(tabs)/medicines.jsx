import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import TopBar from "@/component/TopBar";
import AppGradient from "@/component/AppGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
const Medicines = () => {
  return (
    <AppGradient colors={["#eaf9f8", "#eaf9f8", "#fafafa"]}>
      <SafeAreaView className="flex-1">
        {/* *************************Header************************ */}
        <TopBar />
        {/* *************************Category************************ */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0, paddingTop: 20 }}
        >
          <View className="flex-row justify-between gap-5">
            <View
              className="bg-primary flex flex-row items-center justify-center px-10 py-2 rounded-full"
              style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
            >
              <Text className="font-semibold text-xl text-white">All</Text>
            </View>
            <View
              className="bg-white flex flex-row items-center justify-center px-5 py-2 rounded-full"
              style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
            >
              <Image
                source={images.heart}
                resizeMode="contain"
                className="size-10 mr-3"
              />
              <Text className="font-semibold text-md">Cardiology</Text>
            </View>
            <View
              className="bg-white flex flex-row items-center justify-center px-5 py-2 rounded-full"
              style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
            >
              <Image
                source={images.neurology}
                resizeMode="contain"
                className="size-10 mr-3"
              />
              <Text className="font-semibold text-md">Neurology</Text>
            </View>
            <View
              className="bg-white flex flex-row items-center justify-center px-5 py-2 rounded-full"
              style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
            >
              <Image
                source={images.pediatrics}
                resizeMode="contain"
                className="size-10 mr-3"
              />
              <Text className="font-semibold text-md">Pediatrics</Text>
            </View>
            <View
              className="bg-white flex flex-row items-center justify-center px-5 py-2 rounded-full"
              style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
            >
              <Image
                source={images.dental}
                resizeMode="contain"
                className="size-10 mr-3"
              />
              <Text className="font-semibold text-md">Dental</Text>
            </View>
          </View>
        </ScrollView>
        {/* *************************Upload************************ */}
        <View className="bg-secondary mx-1 mt-5 rounded-xl p-5 flex flex-row items-center justify-between border-2 border-solid border-primary">
          <View className="flex-row gap-2">
            <Image
              source={icons.stethoscope}
              className="size-14 object-contain"
            />
            <View className="flex">
              <Text className="font-semibold text-lg">Add a prescription</Text>
              <Text className="text-lg">to place your order</Text>
            </View>
          </View>
          <View>
            <Pressable className="bg-white py-3 px-5 rounded-md">
              <Text className="text-primary font-bold">Upload</Text>
            </Pressable>
          </View>
        </View>
        {/* *************************Tablets************************ */}
        <View className="my-5 mx-1 flex flex-column gap-4">
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
          <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between">
            <View className="flex-row gap-3 justify-center items-center">
              <Image source={images.tablet} className="size-28" />
              <View>
                <Text className="font-bold text-lg">Paracetamol</Text>
                <Text className="text-lg font-semibold">Tablet</Text>
                <Text className="text-lg font-semibold">₹ 25.55</Text>
              </View>
            </View>
            <View>
              <Pressable className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary">
                <Text className="text-primary font-bold">Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </AppGradient>
  );
};

export default Medicines;
