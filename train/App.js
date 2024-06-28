import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>wE WILL START THE DEVELOPMENTAL PRACTICES HERE</Text>
      <StatusBar style="auto" /> */}
      <View style={{ backgroundColor: "red", width: 100, height: 100 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
