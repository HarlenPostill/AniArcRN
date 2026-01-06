import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Body } from "@/components/ui/body";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Button, ContextMenu, Host } from "@expo/ui/swift-ui";

import { SettingsSection } from "./settings";

type SectionType = "text" | "property" | "data";
type PropertyKey = "title" | "id" | "type";

interface UrlSection {
  id: string;
  type: SectionType;
  value: string;
  propertyKey?: PropertyKey;
}

const propertyLabels: Record<PropertyKey, string> = {
  title: "Anime.Title",
  id: "Anime.ID (My Anime List)",
  type: "Anime.Type (Tv, Movie, OVA, etc)",
};

const propertyDisplayLabels: Record<PropertyKey, string> = {
  title: "Anime.Title",
  id: "Anime.ID",
  type: "Anime.Type",
};

interface PropertyToggleProps {
  property: PropertyKey;
  isSelected: boolean;
  onToggle: () => void;
  colorScheme: "light" | "dark";
}

const PropertyToggle = ({
  property,
  isSelected,
  onToggle,
  colorScheme,
}: PropertyToggleProps) => {
  const colors = Colors[colorScheme];
  const textColor = isSelected ? colors.background : colors.tint;

  return (
    <Pressable onPress={onToggle}>
      <ThemedView
        hasBackground={isSelected}
        useStrokeInstead={!isSelected}
        lightColor={Colors.light.tint}
        darkColor={Colors.dark.tint}
        style={styles.propertyToggle}
      >
        <ThemedText lightColor={textColor} darkColor={textColor}>
          {propertyLabels[property]}
        </ThemedText>
        <IconSymbol
          name={isSelected ? "checkmark.circle" : "circle"}
          color={textColor}
        />
      </ThemedView>
    </Pressable>
  );
};

interface UrlBuilderProps {
  sections: UrlSection[];
  onAddTextSection: () => void;
  onAddPropertySection: (propertyKey: PropertyKey) => void;
  onAddDataSection?: () => void;
  onUpdateTextSection: (id: string, value: string) => void;
  onUpdateDataSection?: (id: string, value: string) => void;
  onRemoveSection: (id: string) => void;
  selectedProperties: Set<PropertyKey>;
  colorScheme: "light" | "dark";
  showDataOption?: boolean;
}

const UrlBuilder = ({
  sections,
  onAddTextSection,
  onAddPropertySection,
  onAddDataSection,
  onUpdateTextSection,
  onUpdateDataSection,
  onRemoveSection,
  selectedProperties,
  colorScheme,
  showDataOption = false,
}: UrlBuilderProps) => {
  const colors = Colors[colorScheme];

  const renderDottedLine = () => (
    <View style={styles.dottedLineContainer}>
      <View style={[styles.dottedLine, { borderColor: colors.tint }]} />
    </View>
  );

  const renderSection = (section: UrlSection, index: number) => (
    <View key={section.id}>
      <View style={styles.sectionRow}>
        {section.type === "text" ? (
          <TextInput
            placeholder="Enter URL segment"
            returnKeyType="done"
            value={section.value}
            onChangeText={(text) => onUpdateTextSection(section.id, text)}
            placeholderTextColor={colors.text}
            style={[
              styles.textInput,
              { color: colors.text, backgroundColor: colors.lighterGrey },
            ]}
          />
        ) : section.type === "property" ? (
          <ThemedView
            hasBackground
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={styles.propertySection}
          >
            <ThemedText
              lightColor={Colors.light.background}
              darkColor={Colors.dark.background}
            >
              {section.value}
            </ThemedText>
          </ThemedView>
        ) : (
          <ThemedView
            hasBackground
            lightColor={Colors.light.tint}
            darkColor={Colors.dark.tint}
            style={styles.dataSection}
          >
            <ThemedText
              lightColor={Colors.light.background}
              darkColor={Colors.dark.background}
            >
              Data Object:
            </ThemedText>
            <TextInput
              placeholder="Enter Data Property"
              returnKeyType="done"
              value={section.value}
              onChangeText={(text) => onUpdateDataSection?.(section.id, text)}
              placeholderTextColor={colors.background}
              style={[styles.dataInput, { color: colors.background + "20" }]}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </ThemedView>
        )}
        {(sections.length > 1 || section.type !== "text") && (
          <Pressable onPress={() => onRemoveSection(section.id)}>
            <IconSymbol name="xmark.circle.fill" color={colors.tint} />
          </Pressable>
        )}
      </View>
      {index < sections.length - 1 && renderDottedLine()}
    </View>
  );

  return (
    <View>
      {sections.map(renderSection)}
      {renderDottedLine()}
      <Host>
        <ContextMenu>
          <ContextMenu.Items>
            <Button onPress={onAddTextSection}>URL Segment</Button>
            {Array.from(selectedProperties).map((property) => (
              <Button
                key={property}
                onPress={() => onAddPropertySection(property)}
              >
                {propertyDisplayLabels[property]}
              </Button>
            ))}
            {showDataOption && onAddDataSection && (
              <Button onPress={onAddDataSection}>Data Property</Button>
            )}
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <ThemedView
              useStrokeInstead
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              style={styles.addSectionButton}
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
  );
};

export default function Layout() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const [selectedOption, setSelectedOption] = useState<"api" | "url">("api");
  const [selectedProperties, setSelectedProperties] = useState<
    Set<PropertyKey>
  >(new Set(["title"]));

  // API URL sections (for API Call + Redirect)
  const [apiUrlSections, setApiUrlSections] = useState<UrlSection[]>([
    { id: "api-1", type: "text", value: "" },
  ]);

  // Redirect URL sections (for both modes)
  const [redirectUrlSections, setRedirectUrlSections] = useState<UrlSection[]>([
    { id: "redirect-1", type: "text", value: "" },
  ]);

  const toggleProperty = (property: PropertyKey) => {
    setSelectedProperties((prev) => {
      const newSet = new Set(prev);
      newSet.has(property) ? newSet.delete(property) : newSet.add(property);
      return newSet;
    });
  };

  // API URL handlers
  const addApiTextSection = () => {
    setApiUrlSections((prev) => [
      ...prev,
      { id: `api-${Date.now()}`, type: "text", value: "" },
    ]);
  };

  const addApiPropertySection = (propertyKey: PropertyKey) => {
    setApiUrlSections((prev) => [
      ...prev,
      {
        id: `api-${Date.now()}`,
        type: "property",
        value: propertyDisplayLabels[propertyKey],
        propertyKey,
      },
    ]);
  };

  const updateApiTextSection = (id: string, value: string) => {
    setApiUrlSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, value } : section
      )
    );
  };

  const removeApiSection = (id: string) => {
    setApiUrlSections((prev) => prev.filter((section) => section.id !== id));
  };

  // Redirect URL handlers
  const addRedirectTextSection = () => {
    setRedirectUrlSections((prev) => [
      ...prev,
      { id: `redirect-${Date.now()}`, type: "text", value: "" },
    ]);
  };

  const addRedirectPropertySection = (propertyKey: PropertyKey) => {
    setRedirectUrlSections((prev) => [
      ...prev,
      {
        id: `redirect-${Date.now()}`,
        type: "property",
        value: propertyDisplayLabels[propertyKey],
        propertyKey,
      },
    ]);
  };

  const addRedirectDataSection = () => {
    setRedirectUrlSections((prev) => [
      ...prev,
      { id: `redirect-${Date.now()}`, type: "data", value: "" },
    ]);
  };

  const updateRedirectTextSection = (id: string, value: string) => {
    setRedirectUrlSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, value } : section
      )
    );
  };

  const updateRedirectDataSection = (id: string, value: string) => {
    setRedirectUrlSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, value } : section
      )
    );
  };

  const removeRedirectSection = (id: string) => {
    setRedirectUrlSections((prev) =>
      prev.filter((section) => section.id !== id)
    );
  };

  const renderOptionButton = (option: "api" | "url", label: string) => {
    const isSelected = selectedOption === option;
    return (
      <Pressable onPress={() => setSelectedOption(option)} style={styles.flex1}>
        <ThemedView
          hasBackground
          lightColor={isSelected ? Colors.light.tint : Colors.light.lighterGrey}
          darkColor={isSelected ? Colors.dark.tint : Colors.dark.lighterGrey}
          style={styles.optionButton}
        >
          <ThemedText
            lightColor={
              isSelected ? Colors.light.background : Colors.light.text
            }
            darkColor={isSelected ? Colors.dark.background : Colors.dark.text}
          >
            {label}
          </ThemedText>
        </ThemedView>
      </Pressable>
    );
  };

  return (
    <Body>
      <ThemedView style={styles.container}>
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
          placeholderTextColor={colors.text}
          style={[
            styles.textInput,
            { color: colors.text, backgroundColor: colors.lighterGrey },
          ]}
        />

        <SettingsSection
          title="Data Type"
          description="How should we get information to redirect you to this service?"
        />
        <ThemedView
          hasBackground
          lightColor={Colors.light.lighterGrey}
          darkColor={Colors.dark.lighterGrey}
          style={styles.optionContainer}
        >
          {renderOptionButton("api", "API Call + Redirect")}
          {renderOptionButton("url", "URL Redirect")}
        </ThemedView>

        <SettingsSection
          title="Anime Properties"
          description="What properties do you need from the show to get all of the information for your service?"
        />
        {(["title", "id", "type"] as PropertyKey[]).map((property) => (
          <PropertyToggle
            key={property}
            property={property}
            isSelected={selectedProperties.has(property)}
            onToggle={() => toggleProperty(property)}
            colorScheme={colorScheme}
          />
        ))}

        {selectedOption === "api" ? (
          <>
            <SettingsSection
              title="API URL"
              description="Build your API URL by adding text sections and property placeholders"
            />
            <UrlBuilder
              sections={apiUrlSections}
              onAddTextSection={addApiTextSection}
              onAddPropertySection={addApiPropertySection}
              onUpdateTextSection={updateApiTextSection}
              onRemoveSection={removeApiSection}
              selectedProperties={selectedProperties}
              colorScheme={colorScheme}
            />

            <SettingsSection
              title="Redirect URL"
              description="Build your redirect URL using the data returned from the API call. Use Data properties to reference values from the JSON response."
            />
            <UrlBuilder
              sections={redirectUrlSections}
              onAddTextSection={addRedirectTextSection}
              onAddPropertySection={addRedirectPropertySection}
              onAddDataSection={addRedirectDataSection}
              onUpdateTextSection={updateRedirectTextSection}
              onUpdateDataSection={updateRedirectDataSection}
              onRemoveSection={removeRedirectSection}
              selectedProperties={selectedProperties}
              colorScheme={colorScheme}
              showDataOption
            />
          </>
        ) : (
          <>
            <SettingsSection
              title="Redirect URL"
              description="Build your redirect URL by adding text sections and property placeholders"
            />
            <UrlBuilder
              sections={redirectUrlSections}
              onAddTextSection={addRedirectTextSection}
              onAddPropertySection={addRedirectPropertySection}
              onUpdateTextSection={updateRedirectTextSection}
              onRemoveSection={removeRedirectSection}
              selectedProperties={selectedProperties}
              colorScheme={colorScheme}
            />
          </>
        )}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable style={[styles.flex1]}>
            <ThemedView
              useStrokeInstead
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              style={[styles.optionButton, { flexGrow: 1 }]}
            >
              <ThemedText
                lightColor={Colors.light.tint}
                darkColor={Colors.dark.tint}
              >
                Test Flow
              </ThemedText>
            </ThemedView>
          </Pressable>
          <Pressable style={[styles.flex1]}>
            <ThemedView
              hasBackground
              lightColor={Colors.light.tint}
              darkColor={Colors.dark.tint}
              style={[styles.optionButton, { flexGrow: 1 }]}
            >
              <ThemedText
                lightColor={Colors.light.background}
                darkColor={Colors.dark.background}
              >
                Save Service
              </ThemedText>
            </ThemedView>
          </Pressable>
        </View>
      </ThemedView>
    </Body>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    gap: 12,
    justifyContent: "space-between",
  },
  flex1: {
    flexGrow: 1,
  },
  textInput: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
  },
  optionContainer: {
    padding: 6,
    borderRadius: 12,
    flexDirection: "row",
    flex: 1,
  },
  optionButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  propertyToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 12,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  propertySection: {
    flex: 1,
    padding: 6,
    borderRadius: 12,
  },
  dataSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    borderRadius: 12,
    gap: 4,
  },
  dataInput: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 14,
  },
  dottedLineContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  dottedLine: {
    height: 16,
    borderWidth: 1,
    borderStyle: "dotted",
  },
  addSectionButton: {
    padding: 6,
    paddingLeft: 10,
    borderRadius: 12,
  },
});
