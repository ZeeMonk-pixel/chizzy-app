import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { CustomInput, CustomPhoneInput } from "@/components/utils";
import { Btn } from "@/components/btn";
import { useRouter } from "expo-router";

type Props = {};

const Passenger = (props: Props) => {

    const router = useRouter();

    const clickNext = () => {
        router.push("/(auth)/instant-not");
    }

  return (
    <SafeAreaView style={styles.passCont}>
      <GoBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.passCusBtn}>
          <Image source={require("../../assets/images/check.png")} />
          <Text style={styles.passCusText}>Continue as a Passenger</Text>
        </View>
        <View style={styles.passFormCont}>
          <Text style={styles.passFormHeadText}>Personal details</Text>
          <Text style={styles.passFormDescText}>
            Kindly enter your phone number and username so we can easily
            identify you
          </Text>
          <View style={styles.inputCont}>
            <CustomPhoneInput label="Phone Number" placeholder="8156987545" />
            <CustomInput placeholder="Your username" label="Username" />
          <Text style={styles.terms}>By continuing you have agreed to our <Text style={{color: '#8441F1'}}>terms and conditions</Text></Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.passBtn}>
        <Btn text="Next" onPress={clickNext} />
      </View>
    </SafeAreaView>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  passCont: {
    padding: 20,
    height: "100%",
    // flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  passCusBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 10,
    width: "100%",
    height: 56,
    backgroundColor: "#8441F1",
    borderRadius: 100,
    marginVertical: 45,
  },
  passCusText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  passFormCont: {
    gap: 15,
  },
  passFormHeadText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: "#181619",
  },
  passFormDescText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
  inputCont: {
    paddingVertical: 20,
    gap: 30,
  },
  terms: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: '#181619',
  },
  passBtn: {
    // borderColor: "red",
    // borderWidth: 2,
    // paddingTop: 90
  }
});
