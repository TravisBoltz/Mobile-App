import { ScrollView, Text, View, Image, Button, Pressable } from "react-native";
{
  /*Pressable is used to create custom buttoms  */
}
//  onPressIn = quickpress
//  onPressOut = release
//  onLongPress = longpress for 5 seconds or more
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    //View Component
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Press" onPress={() => console.log("Button Pressed")} />
      <Pressable onPress={() => console.log("Button Pressed with Pressable")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <ScrollView>
        <Pressable
          onLongPress={() => console.log("Long Pressed with pressable")}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, justo vel tincidunt vestibulum, odio libero tincidunt quam,
            vel lacinia nunc elit vel justo. Nullam nec nunc id libero facilisis
            tincidunt. Nulla facilisi. Sed euismod, justo vel tincidunt
            vestibulum, odio libero tincidunt quam, vel lacinia nunc elit vel
            justo. Nullam nec nunc id libero facilisis tincidunt. Nulla
            facilisi.
          </Text>
        </Pressable>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
