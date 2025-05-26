import AppGradient from "@/component/AppGradient";
import SearchBox from "@/component/SearchBox";
import TopBar from "@/component/TopBar";
import { images } from "@/constants/images";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Appointment = () => {
  const [categorie, setCategories] = useState("all");
  const [liked, setLiked] = useState(false);
  const handleclick = (category) => {
    setCategories(category);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const DoctorList = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      spesialist: "Cardiologist",
      type: "Cardiology",
      hospital: "Apollo Hospitals",
      rating: 4.7,
      exprerience: "10 years",
      image: images.doctor,
    },
    {
      id: 2,
      name: "Dr. Neha Sharma",
      spesialist: "Neurologist",
      type: "Cardiology",
      hospital: "Fortis Health",
      rating: 4.6,
      exprerience: "12 years",
      image: images.doctor,
    },
    {
      id: 3,
      name: "Dr. Karan Desai",
      spesialist: "Dentist",
      type: "Neurology",
      hospital: "Clove Dental",
      rating: 4.8,
      exprerience: "8 years",
      image: images.doctor,
    },
    {
      id: 4,
      name: "Dr. Priya Nair",
      spesialist: "Pediatrician",
      type: "Neurology",
      hospital: "Rainbow Hospital",
      rating: 4.5,
      exprerience: "7 years",
      image: images.doctor,
    },
    {
      id: 5,
      name: "Dr. Ramesh Iyer",
      spesialist: "Orthopedic Surgeon",
      type: "Neurology",
      hospital: "AIIMS Delhi",
      rating: 4.9,
      exprerience: "15 years",
      image: images.doctor,
    },
    {
      id: 6,
      name: "Dr. Anjali Kapoor",
      spesialist: "Dermatologist",
      type: "Dental",
      hospital: "Skin City",
      rating: 4.4,
      exprerience: "6 years",
      image: images.doctor,
    },
    {
      id: 7,
      name: "Dr. Vijay Menon",
      spesialist: "ENT Specialist",
      type: "Pediatrics",
      hospital: "Medanta",
      rating: 4.3,
      exprerience: "9 years",
      image: images.doctor,
    },
    {
      id: 8,
      name: "Dr. Sneha Kulkarni",
      spesialist: "Oncologist",
      type: "Pediatrics",
      hospital: "Tata Memorial",
      rating: 4.8,
      exprerience: "14 years",
      image: images.doctor,
    },
  ];
  const categoryFiltered =
    categorie === "all"
      ? DoctorList
      : DoctorList.filter((doctor) => doctor.type === categorie);

  const query = (searchQuery || "").toLowerCase();
  const filteredDoctors = categoryFiltered.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(query) ||
      doctor.spesialist.toLowerCase().includes(query) ||
      doctor.hospital.toLowerCase().includes(query) ||
      doctor.type.toLowerCase().includes(query)
    );
  });

  const handleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };
  return (
    <AppGradient colors={["#c5f0ec", "#eaf9f8", "#fafafa"]}>
      <SafeAreaView className="flex-1">
        <View className="mb-2">
          <TopBar />
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row justify-between gap-4 py-2">
              <Pressable
                onPress={() => handleclick("all")}
                className={`flex flex-row items-center justify-center rounded-full ${
                  categorie === "all" ? "bg-primary" : "bg-white"
                }`}
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
              >
                <View className="d-flex flex-row items-center justify-center px-10 py-2">
                  <Text
                    className={`font-semibold  text-xl  ${
                      categorie === "all" ? "text-white" : "text-gray-500"
                    }`}
                  >
                    All
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleclick("Cardiology")}
                className={`flex flex-row items-center justify-center rounded-full ${
                  categorie === "Cardiology" ? "bg-primary" : "bg-white"
                }`}
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
              >
                <View className="d-flex flex-row items-center justify-center px-5 py-2">
                  <Image
                    source={images.heart}
                    resizeMode="contain"
                    className="size-10 mr-3"
                  />
                  <Text
                    className={`font-semibold  text-xl ${
                      categorie === "Cardiology"
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    Cardiology
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleclick("Neurology")}
                className={`flex flex-row items-center justify-center rounded-full ${
                  categorie === "Neurology" ? "bg-primary" : "bg-white"
                }`}
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
              >
                <View className="d-flex flex-row items-center justify-center px-5 py-2">
                  <Image
                    source={images.neurology}
                    resizeMode="contain"
                    className="size-10 mr-3"
                  />
                  <Text
                    className={`font-semibold  text-xl ${
                      categorie === "Neurology" ? "text-white" : "text-gray-500"
                    }`}
                  >
                    Neurology
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleclick("Pediatrics")}
                className={`flex flex-row items-center justify-center rounded-full ${
                  categorie === "Pediatrics" ? "bg-primary" : "bg-white"
                }`}
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
              >
                <View className="d-flex flex-row items-center justify-center px-5 py-2">
                  <Image
                    source={images.pediatrics}
                    resizeMode="contain"
                    className="size-10 mr-3"
                  />
                  <Text
                    className={`font-semibold  text-xl ${
                      categorie === "Pediatrics"
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    Pediatrics
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleclick("Dental")}
                className={`flex flex-row items-center justify-center rounded-full ${
                  categorie === "Dental" ? "bg-primary" : "bg-white"
                }`}
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,.1)" }}
              >
                <View className="d-flex flex-row items-center justify-center px-5 py-2">
                  <Image
                    source={images.dental}
                    resizeMode="contain"
                    className="size-10 mr-3"
                  />
                  <Text
                    className={`font-semibold  text-xl ${
                      categorie === "Dental" ? "text-white" : "text-gray-500"
                    }`}
                  >
                    Dental
                  </Text>
                </View>
              </Pressable>
            </View>
          </ScrollView>
        </View>
        <FlatList
          data={filteredDoctors}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 70 }}
          renderItem={({ item }) => (
            <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-start justify-between my-3">
              <View className="flex-row gap-3 justify-center items-center">
                <Image source={item.image} className="size-28 rounded-md" />
                <View>
                  <Text className="font-semibold text-xl  capitalize">
                    {item.name}
                  </Text>
                  <Text className="text-lg text-neutral-600">{item.type}</Text>
                  <Text className="text-lg text-primary">{item.hospital}</Text>
                  <View className="flex-row gap-2 ">
                    <Text className="text-lg text-neutral-600">
                      ⭐ {item.rating}
                    </Text>
                    <Text className="text-lg text-neutral-600">
                      | {item.exprerience}
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable
                className="py-3 px-5"
                style={{ cursor: "pointer" }}
                onPress={() => handleLike(item.id)}
              >
                {liked[item.id] ? (
                  <AntDesign name="heart" size={24} color="#fc6392" />
                ) : (
                  <AntDesign name="hearto" size={24} color="black" />
                )}
              </Pressable>
            </View>
          )}
        />
      </SafeAreaView>
    </AppGradient>
  );
};

export default Appointment;
