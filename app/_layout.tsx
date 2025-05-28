import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import "./global.css";
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
