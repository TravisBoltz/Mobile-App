import { Text, View, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="red" />
      <ActivityIndicator size="large" color="red" />
      <ActivityIndicator size="large" color="red" animating={false} />
      <ActivityIndicator size="large" color="red" animating={true} />
    </View>
  );
}
