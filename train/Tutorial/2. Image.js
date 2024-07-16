//Image Component
import {  Text, View, Image, ImageBackground } from "react-native";

const logoImg = require("./assets/adaptive-icon.png"); //Import image
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      {/* Static Image */}
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      {/* Network Image */}
      <Image
        source={{ uri: "http://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />

      {/* Background Image */}
      <ImageBackground
        source={logoImg}
        style={{ width: "100%", height: "100%" }}
      >
        <Text>Image</Text>
      </ImageBackground>
    </View>
  );
}
