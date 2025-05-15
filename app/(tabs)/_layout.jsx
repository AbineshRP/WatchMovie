import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="medicines"
        options={{ title: "Medicines", headerShown: false }}
      />
      <Tabs.Screen
        name="appointment"
        options={{ title: "Appointment", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default _Layout;
