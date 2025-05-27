import AppGradient from "@/component/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
export default function DoctorProfile() {
  const { doctor } = useLocalSearchParams();
  const router = useRouter();
  const doctorData = JSON.parse(doctor);

  return (
    <AppGradient colors={["#289c8e", "#289c8e", "#fafafa"]}>
      <SafeAreaView className="flex-1 px-2">
        <View className="flex-row  items-center justify-between">
          <Pressable onPress={() => router.back()}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
          <Text className="text-2xl font-semibold text-white text-center">
            Appointment
          </Text>
          <Pressable>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </Pressable>
        </View>
        <ScrollView contentContainerClassName="flex-1">
          <View className="bg-white p-4 rounded-2xl mt-5 flex-1">
            <View className="flex-row items-center pb-4">
              <Image
                source={doctorData.image}
                resizeMode="cover"
                style={{
                  width: width * 0.4,
                  height: height * 0.2,
                  borderRadius: 10,
                  overflow: "hidden",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              />
              <View className="flex-1 ml-4 gap-1">
                <Text className="font-semibold text-2xl">
                  {doctorData.name}
                </Text>
                <Text className="text-2xl">{doctorData.spesialist}</Text>
                <Text className="text-2xl">{doctorData.hospital}</Text>
                <View className="flex-row items-center gap-2">
                  <Text>⭐ {doctorData.rating}</Text>
                  <Text>|</Text>
                  <Text>{doctorData.exprerience}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="text-2xl font-bold my-4">About</Text>
              <Text className="text-lg text-neutral-500">{doctorData.about}</Text>
            </View>
            <View>
              <Text className="text-2xl font-bold my-4">Schedules</Text>
              <Text className="text-lg text-neutral-500">{doctorData.about}</Text>
            </View>
            <View>
              <Text className="text-2xl font-bold my-4">Schedules</Text>
              <Text className="text-lg text-neutral-500">{doctorData.about}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </AppGradient>
  );
}
