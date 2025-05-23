import AppGradient from "@/component/AppGradient";
import SearchBox from "@/component/SearchBox";
import TopBar from "@/component/TopBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => {
  const { height } = Dimensions.get("screen");

  return (
    <AppGradient colors={["#c5f0ec", "#fafafa", "#fafafa"]}>
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
            <View className="mb-5 mx-1">
              <Image
                source={images.sliderImg1}
                 style={{ height: height * 0.14}}
                className={`rounded-2xl w-full
                }] object-contain`}
              />
            </View>
            {/*********************************************** Category *****************************************/}
            <View className="bg-secondary mx-1 rounded-xl py-5 flex flex-row items-center justify-center gap-2">
              <View className="flex-row gap-2">
                <Image
                  source={icons.stethoscope}
                  className="size-14 object-contain"
                />
                <View className="flex">
                  <Text className="font-semibold text-lg">
                    Get The Right Medicine
                  </Text>
                  <Text className="text-lg">Talk to a doctor at No-cost</Text>
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
              className="bg-light-100 mt-6 px-5 pt-8 pb-16"
              style={{
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                boxShadow: "0px -2px 6px rgba(0, 0, 0, .1)",
              }}
            >
              <Text className="font-semibold text-xl ">
                Upcoming Appointment
              </Text>

              <View className="bg-primary py-5 px-5 rounded-3xl my-5">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-3 items-center">
                    <Image source={images.docter} className="size-16" />
                    <View className="flex flex-col">
                      <Text className="text-white text-2xl font-semibold">
                        Kalimuthu
                      </Text>
                      <Text className="text-white">Homeopathy</Text>
                    </View>
                  </View>
                  <View>
                    <Pressable className="bg-white rounded-full ">
                      <Image source={icons.call} className="size-12" />
                    </Pressable>
                  </View>
                </View>
                <View className="flex-row  items-center gap-3 mt-3 px-3">
                  <Image source={icons.calender} />
                  <Text className="text-white font-semibold text-lg">
                    Monday, 1 May
                  </Text>
                  <Image source={icons.clock} />
                  <Text className="text-white font-semibold text-lg">
                    09:00 - 10:30
                  </Text>
                </View>
              </View>

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
