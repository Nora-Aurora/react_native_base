import { Button, ButtonText } from "@/components/ui/button";
import { Text, View } from "react-native";
import { Badge,BadgeText ,BadgeIcon} from "@/components/ui/badge"
import { AlignHorizontalDistributeStart ,Camera} from 'lucide-react-native';

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
    <Badge size="md" variant="solid" action="muted">
  <BadgeText>Verified</BadgeText>
  
  <BadgeIcon as={Camera} className="ml-2" />
</Badge>
    </View>
  );
}
