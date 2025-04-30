import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { Btn } from "@/components/btn";
import { useNavigation, useRouter } from "expo-router";

type Props = {};

const { width } = Dimensions.get("window");

const PaymentReceipt = (props: Props) => {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "flex",
        backgroundColor: "#FFFFFF",
        borderTopColor: "#232533",
        height: 97,
        paddingTop: 15,
      },
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../../assets/images/walletBg.png")} // or use a URL
        style={styles.background}
        resizeMode="cover" // or 'contain', 'stretch', etc.
      >
        <SafeAreaView style={styles.rideCont}>
          <View style={styles.rideHead}>
            <GoBack color="white" />
            <Text style={styles.rideHeadText}>Payment receipt</Text>
          </View>
        </SafeAreaView>
        <View style={styles.receiptBody}>
          <View style={styles.receiptTop}>
            <Image source={require("../../../assets/images/success.png")} />
            <Text style={styles.receiptHeadText}>Transfer Successful!</Text>
            <Text style={styles.receiptBodyText}>
              Your wallet top up was successful
            </Text>
          </View>
          <View style={styles.receiptBtm}>
            <View style={styles.carInfo}>
              <Text style={styles.carInfoLeft}>Transfer Amount</Text>
              <Text style={styles.carInfoRight}>₦10,000</Text>
            </View>
            <View style={styles.payMethodCont}>
              <View style={styles.payMethodImg}>
                <Image
                  source={require("../../../assets/images/paystack.png")}
                />
              </View>
              <Text style={styles.payMethodText}>Pay with Paystack</Text>
            </View>
            <View style={styles.carInfo}>
              <Text style={styles.carInfoLeft}>Data & time</Text>
              <Text style={styles.carInfoRight}>1 Jan 2023, 10:30PM</Text>
            </View>
            <View style={styles.carInfo}>
              <Text style={styles.carInfoLeft}>No. Ref</Text>
              <Text style={styles.carInfoRight}>11288889058722</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.btnCont}>
        <Btn text="Go home" onPress={() => router.push('/(tabs)/home')} />
      </View>
    </>
  );
};

export default PaymentReceipt;

const styles = StyleSheet.create({
  background: {
    height: 248,
    position: "relative",
  },
  rideCont: {
    padding: 10,
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
    color: "white",
    textAlign: "center",
  },
  receiptBody: {
    position: "absolute",
    width: "90%",
    marginHorizontal: "5%",
    height: 457,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.03)",
    borderRadius: 20,
    bottom: -350,
  },
  receiptTop: {
    alignItems: "center",
    paddingVertical: 30,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
  },
  receiptHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 19,
    color: "#566280",
  },
  receiptBodyText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
    color: "#B3B3B5",
  },
  receiptBtm: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  carInfo: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  carInfoLeft: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 24,
    color: "#B3B3B5",
  },
  carInfoRight: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 24,
    color: "#566280",
  },
  payMethodCont: {
    width: "95%",
    marginHorizontal: "auto",
    marginVertical: 10,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: " rgba(0, 0, 0, 0.2)",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  payMethodImg: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(242, 242, 242, 0.8)",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  payMethodText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 14,
    color: "rgba(62, 76, 110, 0.8)",
  },
  btnCont: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginTop: "auto",
  },
});
