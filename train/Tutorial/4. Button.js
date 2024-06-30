//Button
//onPress = onClick
import { ScrollView, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* log Pressed */}
      <Button
        title="Press"
        onPress={() => console.log("Button Pressed")}
        color={"red"}
        disabled={false}
      />
    </View>
  );
}
