import { ComponentProps } from "react";
import { ScrollView } from "react-native";

export function Body(props: ComponentProps<typeof ScrollView>) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      automaticallyAdjustsScrollIndicatorInsets={true}
      contentInsetAdjustmentBehavior="automatic"
      {...props}
    />
  );
}
