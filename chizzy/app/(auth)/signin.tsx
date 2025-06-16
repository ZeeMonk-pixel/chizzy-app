import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { BtnTrans } from "@/components/btn";
import { useRouter } from "expo-router";
import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useAuth, useToken, useUser } from "../context/context";
import { saveSecurely } from "@/utils/storage";
import { AxiosPost } from "../api/axios";

type Props = {};

const Signin = (props: Props) => {
  const url = "user/ValidateUser";
  const [isLoading, setIsLoading] = useState(false);
  const { authData, setAuthData } = useAuth();
  const [errMsg, setErrMsg] = useState("");
  const { setToken } = useToken()
  const { setUserData } = useUser();

  const router = useRouter();
  const clickSignup = () => {
    router.push("/(auth)/signup-choice");
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        // await saveSecurely("userAppData", response);
        const { idToken, user } = response.data;
        setAuthData({ idToken, user });
        setIsLoading(false);
        // console.log(response);
      } else {
        setErrMsg("Google signin was cancelled");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);

      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log("Google signin in progress");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            setErrMsg("Google signin was cancelled");
          default:
            setErrMsg(error.code);
        }
      } else {
        setErrMsg("An error occured");
      }
      setIsLoading(false);
    }
  };

  const dataObj = {
    email: authData?.user?.email,
    provider: "gmail",
  };

  const signIn = async () => {
    setIsLoading(true);
    // console.log(dataObj);
    try {
      const res = await AxiosPost(url, dataObj);
      if (res.statusCode === 200) {
        await saveSecurely("userAppData", res);
        setUserData(res);
        setToken(res?.token)
        router.replace("/(tabs)/home");
      } else {
        console.log("API error:", res);
        await GoogleSignin.signOut();
        setErrMsg(res.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // console.log(error);3
      throw error;
    }
  };

  useEffect(() => {
    if (authData) {
      signIn();
    }
  }, [authData]);

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
            onPress={handleGoogleSignIn}
            loading={isLoading}
            error={errMsg}
          />
          {/* <BtnTrans
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
          /> */}
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
    fontFamily: "Inter_600SemiBold",
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
    justifyContent: "center",
  },
  btmText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    color: "#5A5A5A",
  },
  spanText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    color: "#8441F1",
  },
});
