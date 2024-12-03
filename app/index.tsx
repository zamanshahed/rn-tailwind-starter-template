import { Text, View } from "react-native";
import "../global.css"
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";


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
      <StatusBar style="auto" />

      <Link href="./Profile" className="text-blue-500 underline" >Go to profile</Link>
    </View>
  );
}
