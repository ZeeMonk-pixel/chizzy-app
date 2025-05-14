import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import PilotProgress from "@/components/pilot/pilot-progress";
import { usePathname, useRouter } from "expo-router";
import { CustomInput, CustomPhoneInput } from "@/components/utils";
import { Btn } from "@/components/btn";
import Select, { SelectOption } from "@/components/select";

type Props = {};

const { width } = Dimensions.get("window");

const AccDetails = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const options: SelectOption[] = [
    {
      id: "1",
      label: "Paystack",
      value: "Paystack",
    },
    {
      id: "2",
      label: "GTBank",
      value: "GTBank",
    },
  ];

  const clickNext = () => {
    router.push('/(auth)/instant-not');
  };
  const clickPrev = () => {
    router.push("/pilot/vehicle-details");
  };
  return (
    <SafeAreaView style={styles.pilotCont}>
      <View style={styles.rideHead}>
        <GoBack />
        <Text style={styles.rideHeadText}>Continue as pilot</Text>
      </View>
      <PilotProgress route={pathname} />
      <View style={styles.pilotFormCont}>
        <Text style={styles.passFormHeadText}>Account details</Text>
        <Text style={styles.passFormDescText}>
          Kindly enter your account details below
        </Text>
        <View style={styles.inputCont}>
          <Select
            label="Select Bank"
            placeholder="Kindly select your bank"
            options={options}
            selectedValue={selected}
            onValueChange={setSelected}
          />
          <CustomPhoneInput
            label="Account Number"
            placeholder="Enter your account number"
          />
          <CustomInput
            placeholder="Kindly enter your account name"
            label="Account name"
          />
        </View>
        <Text style={styles.terms}>
          By continuing you have agreed to our{" "}
          <Text style={{ color: "#8441F1" }}>terms and conditions</Text>
        </Text>
        <View style={styles.btnCont}>
          <Btn text="Prev" btnWidth onPress={clickPrev} />
          <Btn text="Next" btnWidth onPress={clickNext} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccDetails;

const styles = StyleSheet.create({
  pilotCont: {
    // padding: 10,
  },
  rideHead: {
    flexDirection: "row",
    gap: width / 5,
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: 'red',
    paddingVertical: 15,
  },
  rideHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#3E4C6E",
    textAlign: "center",
  },
  pilotFormCont: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: "85%",
    // borderColor: 'red',
    // borderWidth: 2,
  },
  passFormHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: "#181619",
  },
  passFormDescText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
    paddingVertical: 15,
  },
  inputCont: {
    paddingVertical: 20,
    gap: 30,
  },
  btnCont: {
    flexDirection: "row",
    marginTop: "auto",
    gap: 20,
    justifyContent: "center",
  },
  terms: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
});
