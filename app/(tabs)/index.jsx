import AppGradient from "@/component/AppGradient";
import AppointmentDetails from "@/component/AppointmentDetails";
import SearchBox from "@/component/SearchBox";
import TopBar from "@/component/TopBar";
import  useLocation  from "@/component/useLocation";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable, SafeAreaView, ScrollView,
  Text,
  View
} from "react-native";
const Home = () => {
  const {longitude , latitude , errorMsg } = useLocation()
  const { height, width } = Dimensions.get("screen");
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const loadAppointment = async () => {
      try {
        const data = await AsyncStorage.getItem("appointment");
        if (data) {
          setAppointment(JSON.parse(data));
        }
      } catch (error) {
        console.error("Failed to load appointment", error);
      }
    };

    loadAppointment();
  }, []);

  return (
    <AppGradient colors={["#fff4d3", "#fafafa", "#fafafa"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <SafeAreaView className="flex-1">
          <View className="flex-1">
            {/*********************************************** Header *****************************************/}
            <TopBar />
            {/*********************************************** Search *****************************************/}
            <SearchBox />
            {/*********************************************** Slider *****************************************/}
            <View className="mb-5 flex items-center mx-auto">
              <Image
                source={images.sliderImg1}
                style={{ height: height * 0.16, width: width - 10 }}
                className="rounded-2xl object-contain"
              />
            </View>
            {/*********************************************** Category *****************************************/}
            <View className="bg-secondary rounded-xl py-5 flex flex-row items-center justify-between px-4">
              <View className="flex-row items-center gap-2">
                <Image
                  source={icons.stethoscope}
                  className="object-contain size-12"
                />
                <View className="flex">
                  <Text className="font-semibold">Get The Right Medicine</Text>
                  <Text className="">Talk to a doctor at No-cost</Text>
                </View>
              </View>
              <View>
                <Pressable className="bg-primary py-3 px-3 rounded-md">
                  <Text className="text-white font-semibold">Consult Now</Text>
                </Pressable>
              </View>
            </View>
            {/***********************************************Appointment*****************************************/}
            <View
              className="bg-secondary mt-6 px-5 pt-8 pb-16"
              style={{
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                boxShadow: "0px -2px 6px rgba(0, 0, 0, .1)",
              }}
            >
              {appointment && (
                <AppointmentDetails
                  Doctor={appointment?.doctor}
                  date={appointment?.date}
                  time={appointment?.time}
                  dayFullName={appointment?.dayFullName}
                />
              )}
              <Text className="font-semibold text-xl ">
                Medicine by Category
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 5 }}
                className="mt-5"
              >
                <View className="flex-row justify-between gap-5">
                  <View
                    className="bg-white flex flex-col items-center justify-center px-5 py-10 rounded-3xl"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
                  >
                    <Image
                      source={images.heart}
                      style={{ width: 74, height: 74 }}
                      resizeMode="contain"
                    />
                    <Text className="font-semibold text-md">Cardiology</Text>
                  </View>
                  <View
                    className="bg-white flex flex-col items-center justify-center px-5 py-10 rounded-3xl"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
                  >
                    <Image
                      source={images.neurology}
                      style={{ width: 74, height: 74 }}
                      resizeMode="contain"
                    />
                    <Text className="font-semibold text-md">Neurology</Text>
                  </View>
                  <View
                    className="bg-white flex flex-col items-center justify-center px-5 py-10 rounded-3xl"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
                  >
                    <Image
                      source={images.pediatrics}
                      style={{ width: 74, height: 74 }}
                      resizeMode="contain"
                    />
                    <Text className="font-semibold text-md">Pediatrics</Text>
                  </View>
                  <View
                    className="bg-white flex flex-col items-center justify-center px-5 py-10 rounded-3xl"
                    style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
                  >
                    <Image
                      source={images.dental}
                      style={{ width: 74, height: 74 }}
                      resizeMode="contain"
                    />
                    <Text className="font-semibold text-md">Dental</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <StatusBar style="dark" />
        </SafeAreaView>
      </ScrollView>
    </AppGradient>
  );
};

export default Home;
