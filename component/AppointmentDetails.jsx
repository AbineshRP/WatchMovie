import { icons } from "@/constants/icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const AppointmentDetails = ({ Doctor, time, date , dayFullName }) => {

  return (
    <>
      <Text className="font-semibold text-xl mb-2">Upcoming Appointment</Text>
      <View className="bg-primary py-5 px-5 rounded-3xl my-5">
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-3 items-center">
            <Image source={Doctor?.image} className="size-16" style={{
              borderRadius: 50,
              width: 50,
              height: 50,
            }} />
            <View className="flex flex-col">
              <Text className="text-white text-2xl font-semibold">
                {Doctor?.name}
              </Text>
              <Text className="text-white">{Doctor?.spesialist}</Text>
            </View>
          </View>
          <Pressable className="bg-white rounded-full">
            <Image source={icons.call} className="size-14" />
          </Pressable>
        </View>
        <View className="flex-row items-center gap-2 mt-3 px-3">
          <Image source={icons.calender}className="size-6" />
          <Text className="text-white font-semibold">{date}</Text>
          <Text className="text-white font-semibold">{dayFullName}</Text>
          <Image source={icons.clock} className="size-6"/>
          <Text className="text-white font-semibold">{time}</Text>
        </View>
      </View>
    </>
  );
};

export default AppointmentDetails;
