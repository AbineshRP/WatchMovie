import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const TabIcon = ({ focused, icon, text }) => {
  if (focused) {
    return (
      <View className="flex min-w-[120px]  flex-1 flex-col min-h-16 justify-center items-center mt-5">
        <Image
          source={icon}
          tintColor={focused ? "7f7f7f" : "7f7f7f"}
          className="size-8"
        />
        <Text className="text-primary">{text}</Text>
      </View>
    );
  }
  return (
    <View className="flex  min-w-[120px] flex-1 flex-col min-h-16 justify-center items-center mt-5">
      <Image source={icon} tintColor={"#7f7f7f"} className="size-8" />
      <Text className="text-gray-500">{text}</Text>
    </View>
  );
};

const NoRippleTabButton = (props) => (
  <Pressable
    android_ripple={{ color: "transparent" }}
    style={props.style}
    onPress={props.onPress}
  >
    {props.children}
  </Pressable>
);

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          position: "absolute",
          elevation: 10,
          height: 80 + insets.bottom,
          paddingHorizontal: 20,
          paddingBottom: insets.bottom,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "6%",
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
          tabBarButton: (props) => <NoRippleTabButton {...props} />,
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
          tabBarButton: (props) => <NoRippleTabButton {...props} />,
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
          tabBarButton: (props) => <NoRippleTabButton {...props} />,
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
          tabBarButton: (props) => <NoRippleTabButton {...props} />,
        }}
      />
    </Tabs>
  );
};

const _Layout = () => {
  return (
    <SafeAreaProvider>
      <TabsLayout />
    </SafeAreaProvider>
  );
};

export default _Layout;
