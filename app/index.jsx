import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontFamily: "outfit-medium",
        fontSize: 40,
      }}>hello !!</Text>
    </View>
  );
}
