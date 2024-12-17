import { Button, ButtonText } from "@/components/ui/button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-cyan-300">Edit app/index.tsx to edit this screen.</Text>
      <Button size="md" variant="solid" action="primary">
        <ButtonText>Hello World!</ButtonText>
    </Button>
    </View>
  );
}
