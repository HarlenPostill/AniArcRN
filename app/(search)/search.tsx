import AnimeCard from "@/components/animeCard/animeCard";
import { Body } from "@/components/ui/body";
import { useSearch } from "@/hooks/use-search";
import { Text, View } from "react-native";

export default function Layout() {
  const searchQuery = useSearch();

  return (
    <Body style={{ flex: 1, alignContent: "stretch" }}>
      {searchQuery && <Text>Searching for: {searchQuery}</Text>}
      <View
        style={{
          flexGrow: 1,
          gap: 6,
          flexWrap: "wrap",
          padding: 16,
          flexDirection: "row",
        }}
      >
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </View>
    </Body>
  );
}
