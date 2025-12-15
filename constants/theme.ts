import { Platform } from "react-native";

const tintColorLight = "#1668A0";
const tintColorDark = "#328BC7";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#F7F9F8",
    tint: tintColorLight,
    altTint: "#86ADC6",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    lighterGrey: "#DEDEDE"
  },
  dark: {
    text: "#ECEDEE",
    background: "#000",
    tint: tintColorDark,
    altTint: "#97B9CE",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    lighterGrey: "#1C1C1E"
  }
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace"
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace"
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  }
});
