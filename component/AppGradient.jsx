import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Content from "./Content";

const AppGradient = ({ children, colors }) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 , paddingHorizontal: 10}}>
        <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
