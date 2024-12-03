import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return <Stack>
  <Text>HEADER</Text>
  <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
  <Text>FOOTER</Text>
  </Stack>;
}
