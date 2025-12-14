import DetailedView from "@/components/animeCard/detailedView";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: `The Boy and the Heron`
        }}
      />
      <DetailedView />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "150%",
    resizeMode: "cover"
  }
});
