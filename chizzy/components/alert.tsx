import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CopyAlert = ({ text, isShow, setIsShow }: Props) => {

    useEffect(() => {
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
    }, [isShow])
    

  return (
    isShow && <View style={styles.alertCont}>
      <Text style={styles.alertText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertCont: {
    padding: 2,
    // backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    top: -20,
    right: -15
  },
  alertText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 8,
    lineHeight: 24,
    color: "#202530",
  },
});
