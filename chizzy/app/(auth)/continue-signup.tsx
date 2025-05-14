import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Btn, BtnTrans } from "@/components/btn";
import { useRouter } from "expo-router";

type Props = {};

const ContinueSignup = (props: Props) => {
  const router = useRouter();
  const [active, setActive] = useState<number | undefined>();

  const clickSelect = (id?: number) => {
    setActive(id);
  };
  const clickNext = () => {
    if(active === 1){
      router.push("/(auth)/passenger");
    }
    if(active === 2){
      router.push("/(auth)/pilot/pilot");
    }
  };

  return (
    <SafeAreaView style={styles.continueCont}>
      <Text style={styles.continueText}>How would you like to continue?</Text>
      <View style={styles.btnCont}>
        {active === 1 ? <Btn text="Continue as a Passenger" id={1} onPress={clickSelect} /> : <BtnTrans text="Continue as a Passenger" id={1} onPress={clickSelect} />}
        {active === 2 ? <Btn text="Continue as a Pilot" id={2} onPress={clickSelect} /> : <BtnTrans text="Continue as a Pilot" id={2} onPress={clickSelect} />}
      </View>
      <View style={styles.passBtn}>
        {active && <Btn text="Next" onPress={clickNext} />}
        {!active && <Btn disabled text="Next" onPress={clickNext} />}
      </View>
    </SafeAreaView>
  );
};

export default ContinueSignup;

const styles = StyleSheet.create({
  continueCont: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    height: "100%",
    // borderColor: 'red',
    // borderWidth: 2,
    // alignItems: "center"
  },
  continueText: {
    fontFamily: 'Inter_600SemiBold',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    alignItems: "center",
    textAlign: "left",
    color: "#181619",
  },
  btnCont: {
    paddingVertical: 50,
    gap: 20,
  },
  passBtn: {
    marginTop: "auto",
  },
});
