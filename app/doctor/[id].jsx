import AppGradient from "@/component/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppointmentDetails from "@/component/AppointmentDetails";
import Entypo from "@expo/vector-icons/Entypo";
import { useLocalSearchParams, useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
export default function DoctorProfile() {
  const router = useRouter();
  const { doctor } = useLocalSearchParams();
  const doctorData = JSON.parse(doctor);
  const [activeTab, setActiveTab] = useState("about");
  const [appointmentdate, setAppointmentDate] = useState(null);
  const [appointmentDay, setAppointmentDay] = useState(null);
  const [appointmenttime, setAppointmentTime] = useState("");
  const [readmore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readmore);
  };
  const generateNextSixDays = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 6; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);

      days.push({
        key: i,
        dayName: nextDay.toLocaleString("default", { weekday: "short" }),
        dayFullName: nextDay.toLocaleString("default", { weekday: "long" }),
        date: nextDay.getDate(),
      });
    }

    return days;
  };
  const DateContainer = ({ dayName, date, onPress }) => {
    return (
      <Pressable
        onPress={onPress}
        className={`ml-4 px-5 py-3 items-center justify-center rounded-2xl flex-col gap-2 ${
          appointmentdate === date ? "bg-primary" : "bg-white"
        }`}
      >
        <Text
          className={`font-semibold text-lg ${
            appointmentdate === date ? "text-white" : "text-neutral-600"
          }`}
        >
          {dayName}
        </Text>
        <Text
          className={`text-3xl font-semibold ${
            appointmentdate === date ? "text-white" : "text-primary"
          }`}
        >
          {date}
        </Text>
      </Pressable>
    );
  };

  const avaliableTime = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];

  const TimeContainer = () => {
    return (
      <View
        className="flex-row justify-between"
        style={{ paddingHorizontal: 12, flexWrap: "wrap" }}
      >
        {avaliableTime.slice(0, 9).map((time, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => setAppointmentTime(time)}
              style={{
                width: "30%",
                marginBottom: 12,
                paddingVertical: 12,
                backgroundColor: appointmenttime === time ? "#f2a310" : "#fff",
                borderRadius: 10,
                borderWidth: appointmenttime === time ? 0 : 1.5,
                borderColor: "#f2a310",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                className={`font-semibold text-lg ${
                  appointmenttime === time ? "text-white" : "text-neutral-600"
                }`}
              >
                {time}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  const handleBookAppointment = async () => {
    Toast.show({
      type: "success",
      text1: "Appointment Booked!",
      text2: "You will receive a confirmation shortly.",
      position: "top",
    });

    const appointmentData = {
      doctor: doctorData,
      date: appointmentdate,
      dayFullName: appointmentDay,
      time: appointmenttime,
    };

    try {
      await AsyncStorage.setItem(
        "appointment",
        JSON.stringify(appointmentData)
      );
    } catch (error) {
      console.error("Failed to save appointment", error);
    }

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <AppGradient colors={["#fff", "#fff", "#fafafa"]}>
      <ScrollView>
        <SafeAreaView className="flex-1 px-2">
          <View className="flex-row  items-center justify-between mb-5">
            <Pressable onPress={() => router.back()}>
              <AntDesign name="left" size={24} color="black" />
            </Pressable>
            <Text className="text-xl font-semibold text-black text-center">
              Doctor Details
            </Text>
            <Pressable>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </Pressable>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 25 }}
          >
            <View className="bg-secondary p-3 rounded-3xl border border-primary mt-5">
              <View className="flex-row items-center">
                <Image
                  source={doctorData.image}
                  resizeMode="cover"
                  className="object-contain"
                  style={{
                    width: width * 0.3,
                    height: height * 0.15,
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
                  <Text className="font-semibold text-2xl text-neutral-600">
                    {doctorData.name}
                  </Text>
                  <Text className="text-xl text-primary">
                    {doctorData.spesialist}
                  </Text>
                  <View className="flex-row items-center gap-2">
                    <Text>⭐ {doctorData.rating}</Text>
                    <Text>|</Text>
                    <Text>{doctorData.exprerience}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="bg-white p-4 rounded-2xl shadow-sm mt-5">
              <View className="flex-row justify-between px-4">
                <Pressable
                  onPress={() => setActiveTab("about")}
                  className="my-2"
                >
                  <Text
                    className={`text-lg ${
                      activeTab === "about"
                        ? "text-primary font-semibold border-b-2 border-primary"
                        : "text-neutral-600"
                    }`}
                  >
                    About
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setActiveTab("Experience")}
                  className="my-2"
                >
                  <Text
                    className={`text-lg ${
                      activeTab === "Experience"
                        ? "text-primary font-semibold border-b-2 border-primary"
                        : "text-neutral-600"
                    }`}
                  >
                    Experience
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setActiveTab("Education")}
                  className="my-2"
                >
                  <Text
                    className={`text-lg ${
                      activeTab === "Education"
                        ? "text-primary font-semibold border-b-2 border-primary"
                        : "text-neutral-600"
                    }`}
                  >
                    Education
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setActiveTab("Reviews")}
                  className="my-2"
                >
                  <Text
                    className={`text-lg ${
                      activeTab === "Reviews"
                        ? "text-primary font-semibold border-b-2 border-primary"
                        : "text-neutral-600"
                    }`}
                  >
                    Reviews
                  </Text>
                </Pressable>
              </View>
              <View className="p-4">
                {activeTab === "about" && (
                  <>
                    <Text
                      className={`text-neutral-600 text-lg ${
                        readmore ? "" : "line-clamp-3"
                      }`}
                    >
                      {doctorData.about}
                    </Text>
                    <Pressable
                      className={`${readmore ? "hidden" : ""} mt-3`}
                      onPress={handleReadMore}
                    >
                      <Text className="text-primary font-semibold">
                        Read More
                      </Text>
                    </Pressable>
                    <Pressable
                      className={`${readmore ? "" : "hidden"} mt-3`}
                      onPress={handleReadMore}
                    >
                      <Text className="text-primary font-semibold">
                        Read Less
                      </Text>
                    </Pressable>
                  </>
                )}
                {activeTab === "Experience" && (
                  <Text className="text-neutral-600 text-lg">
                    Doctor has 10+ years of experience in dermatology.
                  </Text>
                )}
                {activeTab === "Education" && (
                  <Text className="text-neutral-600 text-lg">
                    MBBS, MD - Dermatology from XYZ Medical College.
                  </Text>
                )}
                {activeTab === "Reviews" && (
                  <Text className="text-neutral-600 text-lg">
                    ⭐⭐⭐⭐⭐ - Patients love this doctor!
                  </Text>
                )}
              </View>
            </View>
            <View>
              <View className="p-4 rounded-2xl mt-5">
                <Text className="text-lg font-semibold text-neutral-600">
                  Schedules
                </Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 1 }}
              >
                {generateNextSixDays().map((day) => (
                  <DateContainer
                    key={day.key}
                    dayName={day.dayName}
                    date={day.date}
                    onPress={() => {
                      setAppointmentDate(day.date);
                      setAppointmentDay(day.dayFullName);
                    }}
                  />
                ))}
              </ScrollView>
            </View>
            <View>
              <View className="p-4 rounded-2xl mt-5">
                <Text className="text-lg font-semibold text-neutral-600">
                  Choose time
                </Text>
              </View>
              <TimeContainer />
            </View>
            <View>
              <Pressable
                onPress={handleBookAppointment}
                className="bg-primary p-5 items-center justify-center rounded-xl mt-5"
              >
                <Text className="font-semibold text-white text-xl">
                  Book Appointment
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </AppGradient>
  );
}
