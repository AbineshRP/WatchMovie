import React from "react";
import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const UploadModal = ({
  modalVisible,
  setModalVisible,
  onCamera,
  onGallery,
}) => {
  return (
    <SafeAreaProvider>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex-1 bg-black/50 justify-start">
            <TouchableWithoutFeedback>
              <View className="bg-white p-5 rounded-t-2xl">
                <Text className="text-xl font-bold text-center mb-4">
                  Upload Prescription
                </Text>

                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    onCamera();
                  }}
                  className="bg-primary py-3 rounded-xl mb-3"
                >
                  <Text className="text-white text-center font-semibold text-lg">
                    Take a Photo
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    setModalVisible(false);
                    onGallery();
                  }}
                  className="bg-gray-200 py-3 rounded-xl"
                >
                  <Text className="text-center font-semibold text-lg text-gray-700">
                    Choose from Gallery
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => setModalVisible(false)}
                  className="mt-4"
                >
                  <Text className="text-center text-red-500">Cancel</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaProvider>
  );
};

export default UploadModal;
