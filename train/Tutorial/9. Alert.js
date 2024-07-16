import { Text, View, Alert, Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="Alert 2"
        color={"green"}
        onPress={() => Alert.alert("Invalid Data", "DOB incorrect")}
      />
      <Button
        title="Alert 3"
        color={"red"}
        onPress={() =>
          Alert.alert("Invalid Data", "DOB incorrect", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          ])
        }
      />
    </View>
  );
}
/* The first argument is the title of the alert box,
   the second argument is the message to be displayed,
   and the third argument is an array of buttons. Each button is an object with a text property and an onPress property.
 */
