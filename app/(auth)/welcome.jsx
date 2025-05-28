import AppGradient from "@/component/AppGradient";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <>
      <AppGradient colors={["#b2f0e8", "#fff"]}>
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1 items-center justify-center gap-5">
            <Image source={images.loginHero} />
            <View className="gap-2 items-center">
              <Text className="font-bold text-primary text-xl">
                Welcome to Medi Door
              </Text>
              <Text className="text-center text-neutral-500">
                Lorem ipsum dolor sit amet consectetur. Aliquet sit maecenas
                malesuada{" "}
              </Text>
            </View>
            <Pressable
              className="bg-primary py-5 px-4 rounded-md"
              style={{ width: "90%" }}
              onPress={() => navigation.push("login")}
            >
              <Text className="text-white text-md text-center">Login</Text>
            </Pressable>
            <Pressable
              className="bg-white py-5 px-4 rounded-md flex-row items-center justify-center gap-2 shadow-sm"
              style={{ width: "90%" }}
            >
              <Image source={icons.google} />

              <Text className="text-black text-md text-center">
                Continue with Google
              </Text>
            </Pressable>
            <Pressable
              className="bg-white py-5 px-4 rounded-md flex-row items-center justify-center gap-2 shadow-sm"
              style={{ width: "90%" }}
            >
              <Image source={icons.facebook} />

              <Text className="text-black text-md text-center">
                Continue with Facebook
              </Text>
            </Pressable>
            <Pressable
              className="bg-white py-5 px-4 rounded-md flex-row items-center justify-center gap-2 shadow-sm"
              style={{ width: "90%" }}
            >
              <Image source={icons.apple} />

              <Text className="text-black text-md text-center">
                Continue with Apple
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </AppGradient>
    </>
  );
};

export default Welcome;
