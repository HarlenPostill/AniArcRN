import AnimeCard from "@/components/animeCard/animeCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { ScrollView } from "react-native";

export default function Layout() {
  return (
    <Body>
      <ThemedView style={{ flexGrow: 1, gap: 12 }}>
        <ThemedText style={{ paddingLeft: 16 }} type="subtitle">
          Popular Today
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ overflow: "visible" }}
          contentContainerStyle={{
            flexDirection: "row",
            paddingLeft: 16,
            gap: 8,
          }}
        >
          <AnimeCard smallCard />
          <AnimeCard smallCard />
          <AnimeCard smallCard />
        </ScrollView>
      </ThemedView>
    </Body>
  );
}
