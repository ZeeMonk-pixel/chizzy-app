import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  color?: string;
};

const GoBack = ({color}: Props) => {

    const router = useRouter();

  return (
    <View style={{paddingHorizontal: 10}}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={color || "black"} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({});
