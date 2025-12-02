import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  hasBackground?: boolean;
  useStrokeInstead?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  hasBackground,
  useStrokeInstead = false,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const strokeColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View
      style={[
        useStrokeInstead
          ? {
              boxShadow: `inset 0 0 0 1.5px ${strokeColor}`,
            }
          : { backgroundColor: hasBackground ? backgroundColor : undefined },
        style,
      ]}
      {...otherProps}
    />
  );
}
