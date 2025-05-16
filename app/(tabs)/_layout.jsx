import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, text }) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.hightLightTab}
        className="flex w-full flex-col min-w-[120px] flex-1 px-3 min-h-16 mt-4 ml-5 justify-center items-center rounded-full overflow-hidden"
      >
        <Image
          source={icon}
          tintColor={focused ? "white" : "black"}
          className="size-7"
        ></Image>
        <Text className="font-bold text-white ml-2">{text}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className="flex flex-1 justify-center items-center mt-5">
      <Image source={icon} tintColor={"#117c6f"} className="size-6"></Image>
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          height: 100,
          position: "absolute",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
        },
        tabBarItemStyle: {
          marginTop: "4%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} text={"Home"} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="medicines"
        options={{
          title: "Medicines",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text={"Medicines"}
              icon={icons.medicines}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: "Appointment",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              text={"Appointment"}
              icon={icons.appointment}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} text={"Profile"} icon={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
