import { View, Text } from "react-native";
import React from "react";
import TopBar from "@/component/TopBar";
import AppGradient from "@/component/AppGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
const Appointment = () => {
  return (
    <AppGradient colors={["#c5f0ec", "#eaf9f8", "#fafafa"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView className="flex-1">
          <TopBar />
        </SafeAreaView>
      </ScrollView>
    </AppGradient>
  );
};

export default Appointment;
