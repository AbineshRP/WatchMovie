import AppGradient from "@/component/AppGradient";
import SearchBox from "@/component/SearchBox";
import TopBar from "@/component/TopBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const medicineList = [
    {
      id: 1,
      name: "Paracetamol",
      price: 150,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 2,
      name: "Dolo",
      price: 250,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 3,
      name: "amoxycillin",
      price: 150,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 4,
      name: "betadine",
      price: 100,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 5,
      name: "dolo",
      price: 250,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 6,
      name: "clopidogrel",
      price: 150,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 7,
      name: "fluconazole",
      price: 100,
      type: "Tablet",
      image: images.tablet,
    },
    {
      id: 8,
      name: "betadine",
      price: 170,
      type: "Tablet",
      image: images.tablet,
    },
  ];

  const query = (searchQuery || "").toLowerCase();

  const filteredData = medicineList.filter((item) => {
    return item.name.toLowerCase().includes(query);
  });
  const [addedMedicines, setAddedMedicines] = useState({});

  // Add handler
  const handleAddMedicine = (id) => {
    setAddedMedicines((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Subtract handler
  const handleRemoveMedicine = (id) => {
    setAddedMedicines((prev) => {
      const newQuantity = (prev[id] || 0) - 1;
      if (newQuantity <= 0) {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      }
      return {
        ...prev,
        [id]: newQuantity,
      };
    });
  };

  return (
    <AppGradient colors={["#eaf9f8", "#eaf9f8", "#fafafa"]}>
      <SafeAreaView className="flex-1">
        <View className="mb-2">
          <TopBar />
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          </ScrollView> */}
        </View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 70 }}
          ListHeaderComponent={() => (
            <>
              <View className="bg-secondary my-5 rounded-xl p-5 flex flex-row items-center justify-between border-2 border-solid border-primary">
                <View className="flex-row gap-2">
                  <Image
                    source={icons.stethoscope}
                    className="size-14 object-contain"
                  />
                  <View className="flex">
                    <Text className="font-semibold text-lg">
                      Add a prescription
                    </Text>
                    <Text className="text-lg">to place your order</Text>
                  </View>
                </View>
                <Pressable className="bg-white py-3 px-5 rounded-md">
                  <Text className="text-primary font-bold">Upload</Text>
                </Pressable>
              </View>
            </>
          )}
          renderItem={({ item }) => (
            <View className="bg-white px-6 py-4 rounded-2xl flex flex-row items-end justify-between my-3">
              <View className="flex-row gap-3 justify-center items-center">
                <Image source={images.tablet} className="size-28" />
                <View>
                  <Text className="font-bold text-lg capitalize">
                    {item.name}
                  </Text>
                  <Text className="text-lg">{item.type}</Text>
                  <Text className="text-lg"> ₹{item.price}</Text>
                </View>
              </View>
              {addedMedicines[item.id] ? (
                <View className="flex-row items-center gap-3">
                  <Pressable
                    className="bg-primary px-3 py-2 rounded-lg"
                    onPress={() => handleRemoveMedicine(item.id)}
                  >
                    <Text className="text-white font-bold">-</Text>
                  </Pressable>
                  <Text className="text-lg text-center">
                    {addedMedicines[item.id]}
                  </Text>
                  <Pressable
                    className="bg-primary px-3 py-2 rounded-lg"
                    onPress={() => handleAddMedicine(item.id)}
                  >
                    <Text className="text-white font-bold">+</Text>
                  </Pressable>
                </View>
              ) : (
                <Pressable
                  className="bg-secondary py-3 px-5 rounded-lg border-2 border-primary"
                  onPress={() => handleAddMedicine(item.id)}
                >
                  <Text className="text-primary font-bold">Add</Text>
                </Pressable>
              )}
            </View>
          )}
        />
      </SafeAreaView>
    </AppGradient>
  );
};

export default Medicines;
