import { Text, View } from "react-native";
import "../global.css"


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl text-cyan-600">Hi Sumaya!</Text>
    </View>
  );
}
