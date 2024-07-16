import { View, Text } from "react-native";

export default greet = ({ name }) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello, {name}!</Text>
    </View>
  );
};
