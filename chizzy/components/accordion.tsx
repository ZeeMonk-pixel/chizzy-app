import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    text: string
};

export const SittingAccordion = ({text}: Props) => {
  return (
    <View style={styles.infoAccord}>
      <Ionicons name={"information-circle"} size={12} color={"#FFFFFF"} />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};
export const RoundAccordion = ({text}: Props) => {
  return (
    <View style={styles.infoAccordRound}>
      <Ionicons name={"information-circle"} size={12} color={"#FFFFFF"} />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
    infoAccord: {
        flexDirection: 'row',
        width: 242,
        // height: 42,
        backgroundColor: '#8441F1',
        borderTopLeftRadius: 10,
        borderTopEndRadius: 10,
        alignItems: 'center',
        gap: 10,
        padding: 5,
        marginVertical: 'auto',
    },
    infoAccordRound: {
        flexDirection: 'row',
        width: '75%',
        height: 42,
        paddingHorizontal: 10,
        backgroundColor: '#8441F1',
        borderRadius: 20,
        alignItems: 'center',
        gap: 10,
        padding: 5,
        marginVertical: 'auto',
    },
    infoText: {
        fontFamily: 'Inter_400Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 18,
        color: '#FFFFFF',
    },
});
