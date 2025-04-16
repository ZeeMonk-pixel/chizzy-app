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
  onPress?: () => void;
  logo?: ImageSourcePropType;
};

export const Btn = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.btnCont} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const BtnTrans = ({ text, onPress, logo }: Props) => {
  return (
    <TouchableOpacity style={styles.btnTsCont} onPress={onPress}>
      <Image source={logo} />
      <Text style={styles.btnTsText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
    width: 343,
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
    width: 338.29,
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
