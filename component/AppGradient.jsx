import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import Content from "./Content";

const AppGradient = ({ children, colors }) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Content>{children}</Content>
      </ScrollView>
    </LinearGradient>
  );
};

export default AppGradient;
