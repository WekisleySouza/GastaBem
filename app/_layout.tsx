import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => false
      }}
    >
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}


