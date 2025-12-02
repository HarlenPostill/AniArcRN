import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  hasBackground?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  hasBackground,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View
      style={[
        { backgroundColor: hasBackground ? backgroundColor : undefined },
        style,
      ]}
      {...otherProps}
    />
  );
}
