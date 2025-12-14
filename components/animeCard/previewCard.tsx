import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Image, StyleSheet, View, useColorScheme } from "react-native";

export default function PreviewCard() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        gap: 12,
        backgroundColor:
          colorScheme === "dark"
            ? Colors.dark.lighterGrey
            : Colors.light.lighterGrey,
        height: 250,
        padding: 12
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12
        }}
      >
        <Image
          source={require("../../assets/img.png")}
          style={{
            width: 100,
            height: 140,
            borderRadius: 8,
            resizeMode: "cover"
          }}
        />
        <View style={{ flexGrow: 1, justifyContent: "center", gap: 12 }}>
          <ThemedText style={{ wordWrap: "break-word" }} type="subtitle">
            The Boy and the Heron
          </ThemedText>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <ThemedView
              hasBackground
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                borderRadius: 8,
                gap: 6
              }}
            >
              <IconSymbol
                name="star.fill"
                size={18}
                color={
                  colorScheme === "dark"
                    ? Colors.dark.background
                    : Colors.light.background
                }
              />
              <ThemedText
                lightColor={Colors.light.background}
                darkColor={Colors.dark.background}
                type="defaultSemiBold"
              >
                9
              </ThemedText>
            </ThemedView>
            <ThemedView
              hasBackground
              useStrokeInstead
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 8,
                borderRadius: 8,
                gap: 6
              }}
            >
              <ThemedText
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
                type="defaultSemiBold"
              >
                2023
              </ThemedText>
            </ThemedView>
          </View>
        </View>
      </View>
      <ThemedText numberOfLines={3}>
        {
          "Esse fugiat nostrud  nostrud nostrud nostrud nostrud nostrud ut. Voluptate dolore laboris enim Lorem sit tempor aute ea consequat est. Amet excepteur in veniam laboris exercitation exercitation non fugiat est velit. Commodo eiusmod tempor culpa non ex officia aliqua cillum cupidatat cupidatat do non sit. Eiusmod enim nulla fugiat."
        }
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "150%",
    resizeMode: "cover"
  }
});
