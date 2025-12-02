import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="saved"
        options={{
          headerLargeTitleEnabled: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "transparent" },
          headerLargeStyle: { backgroundColor: "transparent" },
          title: "Saved",
        }}
      />
    </Stack>
  );
}
