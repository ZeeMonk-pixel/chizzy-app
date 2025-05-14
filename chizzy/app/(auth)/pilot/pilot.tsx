import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import PilotProgress from "@/components/pilot/pilot-progress";
import { usePathname, useRouter } from "expo-router";
import { CustomInput, CustomPhoneInput } from "@/components/utils";
import { Btn } from "@/components/btn";

type Props = {};

const { width } = Dimensions.get("window");

const Pilot = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const clickNext = () => {
    router.push('/pilot/vehicle-details');
  }

  return (
    <SafeAreaView style={styles.pilotCont}>
      <View style={styles.rideHead}>
        <GoBack />
        <Text style={styles.rideHeadText}>Continue as pilot</Text>
      </View>
      <PilotProgress route={pathname} />
      <View style={styles.pilotFormCont}>
        <Text style={styles.passFormHeadText}>Personal details</Text>
        <Text style={styles.passFormDescText}>
          Kindly enter your phone number and username so we can easily identify
          you
        </Text>
        <View style={styles.inputCont}>
          <CustomPhoneInput label="Phone Number" placeholder="8156987545" />
          <CustomInput placeholder="Your call name" label="Call name" />
        </View>
        <View style={styles.btnCont}>
            <Btn text="Prev" btnWidth disabled />
            <Btn text="Next" btnWidth onPress={clickNext} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pilot;

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
    height: '85%',
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
    flexDirection: 'row',
    marginTop: 'auto',
    gap: 20,
    justifyContent: 'center'
  }
});
