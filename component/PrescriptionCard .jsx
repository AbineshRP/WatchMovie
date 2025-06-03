import { icons } from "@/constants/icons";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import UploadModal from "./UploadModal";
const PrescriptionCard = () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const mediaStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (
        cameraStatus.status !== "granted" ||
        mediaStatus.status !== "granted"
      ) {
        console.log("Permission denied");
        return;
      }
    })();
  }, []);

  const handleUpload = async () => {
    setModalVisible(!modalVisible);
  };
  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
      cameraType: "back",
    });

    if (!result.canceled) {
      const photo = result.assets[0];
      setImage(photo.uri);
      Toast.show({
        type: "success",
        text1: "Prescription uploaded!",
        text2: "Your prescription has been uploaded successfully.",
        position: "top",
      });
    }
  };

  const openGallery = async () => {
    setModalVisible(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      const photo = result.assets[0];
      setImage(photo.uri);
      Toast.show({
        type: "success",
        text1: "Prescription uploaded!",
        text2: "Your prescription has been uploaded successfully.",
        position: "top",
      });
    }
  };

  return (
    <>
      <View className="bg-secondary my-5 rounded-xl p-5 flex flex-row items-center justify-between border-2 border-solid border-primary">
        <View className="flex-row items-center gap-2">
          <Image
            source={icons.stethoscope}
            className="object-contain size-12"
          />
          <View className="flex">
            <Text className="font-semibold text-lg">Add a prescription</Text>
            <Text className="text-lg">to place your order</Text>
          </View>
        </View>

        <Pressable
          className="bg-white py-3 px-5 rounded-md"
          onPress={handleUpload}
        >
          <Text className="text-primary font-bold">Upload</Text>
        </Pressable>
      </View>
      <UploadModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCamera={openCamera}
        onGallery={openGallery}
      />
      {image && (
        <View className="items-center mt-4">
          <Text className="font-semibold text-base mb-2 text-primary">
            Prescription Uploaded{" "}
          </Text>
        </View>
      )}
    </>
  );
};

export default PrescriptionCard;
