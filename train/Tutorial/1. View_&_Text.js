//View Component and Text Component

import { Text, View } from "react-native";
//View Component = div box
//text componet = p tag
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ width: 300, height: 300, backgroundColor: "lightBlue" }}>
        <Text style={{ padding: 60 }}>
          <Text style={{ color: "white" }}>Hello</Text> World
        </Text>
      </View>
    </View>
  );
}
