import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { ContextMenu, Host } from "@expo/ui/swift-ui";
import {
  Button,
  Pressable,
  TextInput,
  View,
  useColorScheme
} from "react-native";

import { SettingsSection } from "./settings";

type SectionType = "text" | "property";
type PropertyKey = "title" | "id" | "type";

interface UrlSection {
  id: string;
  type: SectionType;
  value: string;
  propertyKey?: PropertyKey;
}

const propertyLabels: Record<PropertyKey, string> = {
  title: "Anime.Title",
  id: "Anime.ID",
  type: "Anime.Type"
};

export default function Layout() {
  const colorScheme = useColorScheme();
  const [selectedOption, setSelectedOption] = useState<"api" | "url">("api");
  const [selectedProperties, setSelectedProperties] = useState<
    Set<PropertyKey>
  >(new Set(["title"]));
  const [urlSections, setUrlSections] = useState<UrlSection[]>([
    { id: "1", type: "text", value: "" }
  ]);

  const toggleProperty = (property: PropertyKey) => {
    setSelectedProperties(prev => {
      const newSet = new Set(prev);
      if (newSet.has(property)) {
        newSet.delete(property);
      } else {
        newSet.add(property);
      }
      return newSet;
    });
  };

  const addTextSection = () => {
    setUrlSections(prev => [
      ...prev,
      { id: Date.now().toString(), type: "text", value: "" }
    ]);
  };

  const addPropertySection = (propertyKey: PropertyKey) => {
    setUrlSections(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "property",
        value: propertyLabels[propertyKey],
        propertyKey
      }
    ]);
  };

  const updateTextSection = (id: string, value: string) => {
    setUrlSections(prev =>
      prev.map(section => (section.id === id ? { ...section, value } : section))
    );
  };

  const removeSection = (id: string) => {
    setUrlSections(prev => prev.filter(section => section.id !== id));
  };

  return (
    <Body>
      <ThemedView
        style={{
          flexGrow: 1,
          padding: 16,
          gap: 12,
          justifyContent: "space-between"
        }}
      >
        <SettingsSection
          title="Import Service"
          description="Build out the service flow from scratch with the build service tool or import an existing service with a qr code"
        />
        <SettingsSection
          title="Service Name"
          description="Set the Name of the service to appear in the presets list"
        />
        <TextInput
          placeholder="Enter Service Name"
          returnKeyType="done"
          placeholderTextColor={
            colorScheme === "dark" ? Colors.dark.text : Colors.light.text
          }
          style={{
            color:
              colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.lighterGrey
                : Colors.light.lighterGrey,
            borderRadius: 12,
            padding: 10
          }}
        />
        <SettingsSection
          title="Data Type"
          description="How should we get information to redirect you to this service?"
        />
        <ThemedView
          hasBackground
          lightColor={Colors.light.lighterGrey}
          darkColor={Colors.dark.lighterGrey}
          style={{
            padding: 6,
            borderRadius: 12,
            flexDirection: "row",
            flex: 1
          }}
        >
          <Pressable
            onPress={() => setSelectedOption("api")}
            style={{ flexGrow: 1 }}
          >
            <ThemedView
              hasBackground
              lightColor={
                selectedOption === "api"
                  ? Colors.light.tint
                  : Colors.light.lighterGrey
              }
              darkColor={
                selectedOption === "api"
                  ? Colors.dark.tint
                  : Colors.dark.lighterGrey
              }
              style={{
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: "center"
              }}
            >
              <ThemedText
                lightColor={
                  selectedOption === "api"
                    ? Colors.light.background
                    : Colors.light.text
                }
                darkColor={
                  selectedOption === "api"
                    ? Colors.dark.background
                    : Colors.dark.text
                }
              >
                API Call + Redirect
              </ThemedText>
            </ThemedView>
          </Pressable>
          <Pressable
            onPress={() => setSelectedOption("url")}
            style={{ flexGrow: 1 }}
          >
            <ThemedView
              hasBackground
              lightColor={
                selectedOption === "url"
                  ? Colors.light.tint
                  : Colors.light.lighterGrey
              }
              darkColor={
                selectedOption === "url"
                  ? Colors.dark.tint
                  : Colors.dark.lighterGrey
              }
              style={{
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: "center"
              }}
            >
              <ThemedText
                lightColor={
                  selectedOption === "url"
                    ? Colors.light.background
                    : Colors.light.text
                }
                darkColor={
                  selectedOption === "url"
                    ? Colors.dark.background
                    : Colors.dark.text
                }
              >
                URL Redirect
              </ThemedText>
            </ThemedView>
          </Pressable>
        </ThemedView>
        <SettingsSection
          title="Anime Properties"
          description="What properties do you need from the show to get all of the information for your service?"
        />
        <Pressable onPress={() => toggleProperty("title")}>
          <ThemedView
            hasBackground={selectedProperties.has("title")}
            useStrokeInstead={!selectedProperties.has("title")}
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
              borderRadius: 12
            }}
          >
            <ThemedText
              lightColor={
                selectedProperties.has("title")
                  ? Colors.light.background
                  : Colors.light.tint
              }
              darkColor={
                selectedProperties.has("title")
                  ? Colors.dark.background
                  : Colors.dark.tint
              }
            >
              Anime.Title
            </ThemedText>
            <IconSymbol
              name={
                selectedProperties.has("title") ? "checkmark.circle" : "circle"
              }
              color={
                selectedProperties.has("title")
                  ? colorScheme === "dark"
                    ? Colors.dark.background
                    : Colors.light.background
                  : colorScheme === "dark"
                    ? Colors.dark.tint
                    : Colors.light.tint
              }
            />
          </ThemedView>
        </Pressable>
        <Pressable onPress={() => toggleProperty("id")}>
          <ThemedView
            hasBackground={selectedProperties.has("id")}
            useStrokeInstead={!selectedProperties.has("id")}
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
              borderRadius: 12
            }}
          >
            <ThemedText
              lightColor={
                selectedProperties.has("id")
                  ? Colors.light.background
                  : Colors.light.tint
              }
              darkColor={
                selectedProperties.has("id")
                  ? Colors.dark.background
                  : Colors.dark.tint
              }
            >
              Anime.ID (My Anime List)
            </ThemedText>
            <IconSymbol
              name={
                selectedProperties.has("id") ? "checkmark.circle" : "circle"
              }
              color={
                selectedProperties.has("id")
                  ? colorScheme === "dark"
                    ? Colors.dark.background
                    : Colors.light.background
                  : colorScheme === "dark"
                    ? Colors.dark.tint
                    : Colors.light.tint
              }
            />
          </ThemedView>
        </Pressable>
        <Pressable onPress={() => toggleProperty("type")}>
          <ThemedView
            hasBackground={selectedProperties.has("type")}
            useStrokeInstead={!selectedProperties.has("type")}
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
              borderRadius: 12
            }}
          >
            <ThemedText
              lightColor={
                selectedProperties.has("type")
                  ? Colors.light.background
                  : Colors.light.tint
              }
              darkColor={
                selectedProperties.has("type")
                  ? Colors.dark.background
                  : Colors.dark.tint
              }
            >
              Anime.Type (Tv, Movie, OVA, etc)
            </ThemedText>
            <IconSymbol
              name={
                selectedProperties.has("type") ? "checkmark.circle" : "circle"
              }
              color={
                selectedProperties.has("type")
                  ? colorScheme === "dark"
                    ? Colors.dark.background
                    : Colors.light.background
                  : colorScheme === "dark"
                    ? Colors.dark.tint
                    : Colors.light.tint
              }
            />
          </ThemedView>
        </Pressable>
        <SettingsSection
          title="API URL"
          description="Build your API URL by adding text sections and property placeholders"
        />
        <View>
          {urlSections.map((section, index) => (
            <View key={section.id}>
              {section.type === "text" ? (
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <TextInput
                    placeholder="Enter URL segment"
                    returnKeyType="done"
                    value={section.value}
                    onChangeText={text => updateTextSection(section.id, text)}
                    placeholderTextColor={
                      colorScheme === "dark"
                        ? Colors.dark.text
                        : Colors.light.text
                    }
                    style={{
                      flex: 1,
                      color:
                        colorScheme === "dark"
                          ? Colors.dark.text
                          : Colors.light.text,
                      backgroundColor:
                        colorScheme === "dark"
                          ? Colors.dark.lighterGrey
                          : Colors.light.lighterGrey,
                      borderRadius: 12,
                      padding: 10
                    }}
                  />
                  {urlSections.length > 1 && (
                    <Pressable onPress={() => removeSection(section.id)}>
                      <IconSymbol
                        name="xmark.circle.fill"
                        color={
                          colorScheme === "dark"
                            ? Colors.dark.text
                            : Colors.light.text
                        }
                      />
                    </Pressable>
                  )}
                </View>
              ) : (
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
                >
                  <ThemedView
                    hasBackground
                    lightColor={Colors.light.tint}
                    darkColor={Colors.dark.tint}
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRadius: 12,
                      alignItems: "center"
                    }}
                  >
                    <ThemedText
                      lightColor={Colors.light.background}
                      darkColor={Colors.dark.background}
                    >
                      {`{${section.value}}`}
                    </ThemedText>
                  </ThemedView>
                  <Pressable onPress={() => removeSection(section.id)}>
                    <IconSymbol
                      name="xmark.circle.fill"
                      color={
                        colorScheme === "dark"
                          ? Colors.dark.text
                          : Colors.light.text
                      }
                    />
                  </Pressable>
                </View>
              )}
              {index < urlSections.length - 1 && (
                <View style={{ flexGrow: 1, alignItems: "center" }}>
                  <View
                    style={{
                      height: 16,
                      borderWidth: 1,
                      borderStyle: "dotted",
                      borderColor:
                        colorScheme === "dark"
                          ? Colors.dark.tint
                          : Colors.light.tint
                    }}
                  />
                </View>
              )}
            </View>
          ))}
          <View style={{ flexGrow: 1, alignItems: "center" }}>
            <View
              style={{
                height: 20,
                borderWidth: 1,
                borderStyle: "dotted",
                borderColor:
                  colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
              }}
            />
          </View>
          <Host>
            <ContextMenu>
              <ContextMenu.Items>
                <Button title="Text Section" onPress={addTextSection} />
                {Array.from(selectedProperties).map(property => (
                  <Button
                    key={property}
                    title={propertyLabels[property]}
                    onPress={() => addPropertySection(property)}
                  />
                ))}
              </ContextMenu.Items>
              <ContextMenu.Trigger>
                <ThemedView
                  useStrokeInstead
                  lightColor={Colors.light.tint}
                  darkColor={Colors.dark.tint}
                  style={{ padding: 6, borderRadius: 12 }}
                >
                  <ThemedText
                    lightColor={Colors.light.tint}
                    darkColor={Colors.dark.tint}
                  >
                    Add Section
                  </ThemedText>
                </ThemedView>
              </ContextMenu.Trigger>
            </ContextMenu>
          </Host>
        </View>
      </ThemedView>
    </Body>
  );
}
