import colors from "@/src/constants/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => false,
        contentStyle: { backgroundColor: colors.color5 }
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}


