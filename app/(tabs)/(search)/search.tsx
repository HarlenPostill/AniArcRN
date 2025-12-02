import { useSearch } from "@/hooks/use-search";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const searchQuery = useSearch();

  return (
    <SafeAreaView>
      {searchQuery && <Text>Searching for: {searchQuery}</Text>}
    </SafeAreaView>
  );
}
