import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

type Props = {
  text: string;
  onPress?: (id?: number) => void;
  logo?: ImageSourcePropType;
  disabled?: boolean;
  id?: number
};


export const Btn = ({ text, onPress, disabled, id }: Props) => {
  return (
    <TouchableOpacity style={[styles.btnCont, {backgroundColor: disabled ? "#E1E1E1" : '#8441F1'}]} onPress={() => onPress?.(id)}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const BtnTrans = ({ text, onPress, logo, id }: Props) => {
  return (
    <TouchableOpacity style={styles.btnTsCont} onPress={() => onPress?.(id)}>
      <Image source={logo} />
      <Text style={styles.btnTsText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
    width: "100%",
    height: 56,
    backgroundColor: "#8441F1",
    borderRadius: 100,
  },
  btnText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  btnTsCont: {
    width: "100%",
    height: 46.66,
    borderWidth: 1.41596,
    borderColor: "#D0D0D0",
    borderRadius: 22,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTsText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
});
