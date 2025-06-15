import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback,  useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Btn } from "./btn";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

type Props = {};
const { width } = Dimensions.get("window");

const SliderItem = (props: Props) => {
  const [pageCount, setPageCount] = useState(0);
  const router = useRouter();
  const clickSignin = () => {
    router.replace("/(auth)/signin");
  };

  const clickNew = () => {
    if (pageCount < 2) {
      setPageCount(pageCount + 1);
    }
    if (pageCount >= 2) {
      router.replace("/signup-choice");
    }
  };

  useFocusEffect(
    useCallback(() => {
      setPageCount(0);
    }, [])
  );

  return (
    <View style={[styles.cont]}>
      <Image style={styles.img} source={require("@/assets/images/img.png")} />
      <LinearGradient
        colors={["rgba(132, 65, 241, 0.5)", "rgba(132, 65, 241, 0.5)"]}
        style={styles.gradient}
      ></LinearGradient>
      <Text style={styles.title}>
        {pageCount === 0
          ? "Request a ride in seconds."
          : pageCount === 1
          ? "Get a ride at a fair price."
          : "Ride with peace of mind."}
      </Text>
      <Text style={styles.text}>
        {pageCount === 0
          ? "With Chizzy Rides, you can request a ride in just a few seconds. Simply enter your pickup and drop-off locations, and we'll find a driver for you."
          : pageCount === 1
          ? "Chizzy Rides is committed to providing you with a fair price for your ride. We'll show you the estimated price before you request a ride, so you know exactly what you're paying."
          : "Chizzy Rides is committed to your safety. All of our drivers are background checked and insured, and we offer 24/7 customer support."}
      </Text>
      <View style={[styles.dotCont, pageCount !== 0 && { paddingTop: 60 }]}>
        <View style={[styles.dot, pageCount === 0 && styles.activeDot]}></View>
        <View style={[styles.dot, pageCount === 1 && styles.activeDot]}></View>
        <View style={[styles.dot, pageCount === 2 && styles.activeDot]}></View>
      </View>
      <View style={styles.btnContainer}>
        <Btn
          text={pageCount === 0 ? "I’m new to the app" : "Next"}
          onPress={clickNew}
        />
      </View>
      {pageCount === 0 && (
        <TouchableOpacity style={styles.loginCont} onPress={clickSignin}>
          <Text style={styles.login}>Log in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  cont: {
    width: width,
    // borderColor: "red",
    // borderWidth: 2
    justifyContent: "center",
    gap: 15,
  },
  img: {
    width: "100%",
    height: 419,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: "#181619",
    paddingHorizontal: 15,
  },
  text: {
    width: "100%",
    paddingHorizontal: 15,
    fontFamily: 'Inter_400Regular',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: 419,
    top: 0,
  },
  dotCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
  },
  btnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    width: 343,
    // borderColor: "red",
    // borderWidth: 2,
    marginHorizontal: "auto"
  },
  loginCont: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  login: {
    fontFamily: 'Inter_600SemiBold',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#18181B",
  },
});
