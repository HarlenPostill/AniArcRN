import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { SearchBarProps } from "react-native-screens";

export function useSearch(options: Omit<SearchBarProps, "ref"> = {}) {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const interceptedOptions: SearchBarProps = {
      ...options,
      onChangeText(event) {
        setSearch(event.nativeEvent.text);
        options.onChangeText?.(event);
      },
      onSearchButtonPress(event) {
        setSearch(event.nativeEvent.text);
        options.onSearchButtonPress?.(event);
      },
      onCancelButtonPress(event) {
        setSearch("");
        options.onCancelButtonPress?.(event);
      },
    };

    navigation.setOptions({
      headerShown: true,
      headerSearchBarOptions: interceptedOptions,
    });
  }, [navigation, options]);

  return search;
}
