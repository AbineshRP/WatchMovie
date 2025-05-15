import { View, Text } from "react-native";
import { StatusBar } from "react-native-web";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-dark-100">Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
