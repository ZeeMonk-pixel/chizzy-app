import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  text: string;
  onPress?: (id?: number) => void;
  logo?: ImageSourcePropType;
  disabled?: boolean;
  id?: number;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  bgColor?: string;
  color?: string;
  btnWidth?: boolean;
  loading?: boolean;
  error?: string;
};


export const Btn = ({ text, onPress, disabled, id, iconColor, iconName, iconSize, bgColor, color, btnWidth, loading }: Props) => {
  return (
    <TouchableOpacity style={[styles.btnCont, {backgroundColor: disabled ? "#E1E1E1" : '#8441F1', width: btnWidth ? '45%' : '100%'}]} onPress={() => !disabled && onPress?.(id)}>
      {!loading && <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={iconSize} color={iconColor} />}
      {loading ? <Image source={require('../assets/images/spin.gif')} style={{width: 40, height: 40}} /> : <Text style={styles.btnText}>{text}</Text>}
    </TouchableOpacity>
  );
};
export const RedBtn = ({ text, onPress, disabled, id, iconColor, iconName, iconSize, bgColor, color, loading }: Props) => {
  return (
    <TouchableOpacity style={[styles.btnContRed, {backgroundColor: disabled ? "#E1E1E1" : '#FFF5F5',}]} onPress={() => !disabled && onPress?.(id)}>
      {!loading && <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={iconSize} color={iconColor} />}
      {loading ? <Image source={require('../assets/images/spin.gif')} style={{width: 40, height: 40}} /> : <Text style={[styles.btnRedText, {color: disabled ? 'white' : '#D31A1A'}]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export const BtnTrans = ({ text, onPress, logo,disabled, id, loading, error }: Props) => {
  return (
    <>
    <TouchableOpacity style={[styles.btnTsCont]} onPress={() => !disabled && onPress?.(id)} activeOpacity={1}>
      {!loading && <Image source={logo} />}
      {loading ? <Image source={require('../assets/images/spin.gif')} style={{width: 40, height: 40}} /> : <Text style={styles.btnTsText}>{text}</Text>}
    </TouchableOpacity>
    {error && <Text style={{color: 'red', fontSize: 12}}>{error}</Text>}
    </>
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
  btnContRed: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
    width: "100%",
    height: 56,
    backgroundColor: "#FFF5F5",
    borderRadius: 100,
  },
  btnRedText: {
    fontFamily: 'Inter_600SemiBold',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#D31A1A",
  },
  btnText: {
    fontFamily: 'Inter_600SemiBold',
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
    fontFamily: 'Inter_600SemiBold',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
});
