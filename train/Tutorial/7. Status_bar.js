import { Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      {/*  (android)backgroundColor : sets the color of the status bar */}
      {/* 
      barStyles:
      white-content:white text,
       dark-content:dark-text,
       default: android-white and ios:black 
      */}
    </View>
  );
}
