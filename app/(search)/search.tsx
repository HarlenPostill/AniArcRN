import { Body } from "@/components/ui/body";
import { useSearch } from "@/hooks/use-search";
import { Text } from "react-native";

export default function Layout() {
  const searchQuery = useSearch();

  return (
    <Body style={{ flex: 1, alignContent: "stretch", height: "100%" }}>
      {searchQuery && <Text>Searching for: {searchQuery}</Text>}
    </Body>
  );
}
