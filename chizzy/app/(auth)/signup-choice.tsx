import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { BtnTrans } from "@/components/btn";
import { useRouter } from "expo-router";
import {
  GoogleSignin, isSuccessResponse, isErrorWithCode, statusCodes
} from '@react-native-google-signin/google-signin';
import { useAuth } from "../context/context";
import { saveSecurely } from "@/utils/storage";

type Props = {};

const SignupChoice = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthData } = useAuth();
  const [errMsg, setErrMsg] = useState('');
    const router = useRouter();
    const clickSignin = () => {
        router.push("/(auth)/signin");
    }

    const handleGoogleSignIn = async () => {
      setIsLoading(true);
      try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();
        if(isSuccessResponse(response)){
          await saveSecurely('userAppData', response);
          const { idToken, user } = response.data;
          setAuthData({ idToken, user });
          setIsLoading(false);
          router.replace("/(auth)/continue-signup");
          // console.log(response);
          
        } else {
          setErrMsg('Google signin was cancelled');
          setIsLoading(false);
        }        
      } catch (error) {
        console.log(error);
        
        if(isErrorWithCode(error)){
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
    }
    

  return (
    <SafeAreaView style={styles.signupChoice}>
      <GoBack />
      <View style={styles.bodyCont}>
        <Text style={styles.signupText}>
          Sign up with any option you prefer
        </Text>
        <View style={styles.socialBtnCont}>
          <BtnTrans
            text="Sign up with Gmail"
            logo={require("../../assets/images/Google.png")}
            onPress={handleGoogleSignIn}
            loading = {isLoading}
            // disabled={!request}
          />
        <Text style={{color: 'red'}}>
          {errMsg}
        </Text>
          {/* <BtnTrans
            text="Sign up with Facebook"
            logo={require("../../assets/images/facebook.png")}
            onPress={clickSocialSignup}
          />
          <BtnTrans
            text="Sign up with LinkedIn"
            logo={require("../../assets/images/Linkedin.png")}
            onPress={clickSocialSignup}
          />
          <BtnTrans
            text="Sign up with Twitter"
            logo={require("../../assets/images/Twitter.png")}
            onPress={clickSocialSignup}
          /> */}
        </View>
        <View style={styles.btmCont}>
          <Text style={styles.btmText}>Already have an account? </Text>
          <TouchableOpacity onPress={clickSignin}>
            <Text style={styles.spanText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupChoice;

const styles = StyleSheet.create({
  signupChoice: {
    paddingHorizontal: 5,
    paddingVertical: 30,
  },
  bodyCont: {
    marginHorizontal: "auto",
  },
  signupText: {
    fontFamily: 'Inter_600SemiBold',
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
    fontFamily: 'Inter_500Medium',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    color: "#5A5A5A",
  },
  spanText: {
    fontFamily: 'Inter_500Medium',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
    color: "#8441F1",
  },
});
