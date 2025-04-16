import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { BtnTrans } from "@/components/btn";
import { useRouter } from "expo-router";

type Props = {};

const Signin = (props: Props) => {

    const router = useRouter();
    const clickSignup = () => {
        router.push("/(auth)/signup-choice");
    }

  return (
    <SafeAreaView style={styles.signupChoice}>
      <GoBack />
      <View style={styles.bodyCont}>
        <Text style={styles.signupText}>
          Sign in with any option you prefer
        </Text>
        <View style={styles.socialBtnCont}>
          <BtnTrans
            text="Sign in with Gmail"
            logo={require("../../assets/images/Google.png")}
          />
          <BtnTrans
            text="Sign in with Facebook"
            logo={require("../../assets/images/facebook.png")}
          />
          <BtnTrans
            text="Sign in with LinkedIn"
            logo={require("../../assets/images/Linkedin.png")}
          />
          <BtnTrans
            text="Sign in with Twitter"
            logo={require("../../assets/images/Twitter.png")}
          />
        </View>
        <View style={styles.btmCont}>
          <Text style={styles.btmText}>Don't have an account? </Text>
          <TouchableOpacity onPress={clickSignup}>
            <Text style={styles.spanText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  signupChoice: {
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  bodyCont: {
    marginHorizontal: "auto",
  },
  signupText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    display: "flex",
    alignItems: "center",
    color: "#181619",
    paddingVertical: 40,
  },
  socialBtnCont: {
    gap: 20,
  },
  btmCont: {
    flexDirection: "row",
    paddingVertical: 50,
    justifyContent: "center"
  },
  btmText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    color: "#5A5A5A",
  },
  spanText: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    color: "#8441F1",
  },
});
