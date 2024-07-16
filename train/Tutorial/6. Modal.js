import { useState } from "react";
import { ScrollView, Modal, Text, View, Image, Button } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setModalVisible(true)}
        disabled={false}
      />
      <Modal
        visible={modalVisible} //Visible : sets the modal visibility depending on the state of the modal
        onRequestClose={() => setModalVisible(false)} //onRequestClose : closes the modal when the back option is called
        animationType="slide" // slide to slide the modal from the bottom
        presentationStyle="pageSheet" // (ios) pageSheet to slide the modal from the bottom in a nice ui format
      >
        <View style={{ flex: 1, backgroundColor: "lightgreen", padding: 60 }}>
          <Text>Modal</Text>
          <Button
            title="Hide Modal Button"
            onPress={() => setModalVisible(false)}
            color="red"
          />
        </View>
      </Modal>
    </View>
  );
}
