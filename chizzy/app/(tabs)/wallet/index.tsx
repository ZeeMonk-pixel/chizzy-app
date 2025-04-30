import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import PaymentCard, { EachHist } from "@/components/payment-card";
import PayCard from "@/components/pay-card";
import { Overlay } from "@/components/utils";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const Wallet = (props: Props) => {
  const navigation = useNavigation();
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const payHistArr: EachHist[] = [
    {
      id: "1",
      method: "Pay with Paystack",
      status: "Successful",
      date: "02-May-2023",
      amount: "₦10,000",
    },
    {
      id: "2",
      method: "Pay with Paystack",
      status: "Pending",
      date: "02-May-2023",
      amount: "₦15,000",
    },
    {
      id: "3",
      method: "Pay with Paystack",
      status: "Successful",
      date: "02-May-2023",
      amount: "₦10,000",
    },
    {
      id: "4",
      method: "Pay with Paystack",
      status: "Failed",
      date: "02-May-2023",
      amount: "₦10,000",
    },
    {
      id: "5",
      method: "Pay with Paystack",
      status: "Pending",
      date: "02-May-2023",
      amount: "₦27,000",
    },
  ];

  const clickWallet = () => {
    setOpenWalletModal(true);
  };
  const closeModal = () => {
    setOpenWalletModal(false);
  };

  useEffect(() => {
    if (openWalletModal) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation
        .getParent()
        ?.setOptions({
          tabBarStyle: {
            display: "flex",
            backgroundColor: "#FFFFFF",
            borderTopColor: "#232533",
            height: 97,
            paddingTop: 15,
          },
        });
    }
  }, [openWalletModal]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.wallet}>
        <ImageBackground
          source={require("../../../assets/images/walletBg.png")} // or use a URL
          style={styles.background}
          resizeMode="cover" // or 'contain', 'stretch', etc.
        >
          <View style={styles.walletHead}>
            <Text style={styles.headText}>My Wallet</Text>
            <View style={styles.walletCont}>
              <Text style={styles.walletBal}>Wallet Balance</Text>
              <Text style={styles.walletText}>₦45,000</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.walBtnCont} activeOpacity={1} onPress={clickWallet}>
            <Ionicons name={"wallet"} size={24} color={"#3E4C6E"} />
            <Text style={styles.walBtn}>Wallet top up</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.payHistCont}>
          <Text style={styles.payHistText}>Payment history</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={payHistArr}
            renderItem={({ item }) => (
              <PaymentCard
                method={item?.method}
                amount={item?.amount}
                status={item?.status}
                date={item?.date}
                id={item?.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        {openWalletModal && <PayCard onPress={closeModal} />}
      </View>
      {openWalletModal && <Overlay onPress={closeModal} />}
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  wallet: {
    height: "100%",
    position: "relative",
  },
  background: {
    alignItems: "center",
    paddingVertical: 60,
    paddingTop: 80,
    position: "relative",
  },
  walletHead: {},
  headText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
  walletCont: {
    paddingTop: 50,
    paddingBottom: 10,
  },
  walletBal: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 24,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
    opacity: 0.7,
  },
  walletText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 32,
    // lineHeight: 24,
    textAlign: "center",
    color: "#FFFFFF",
  },
  walBtnCont: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 292,
    height: 69,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.03)",
    borderRadius: 20,
    position: "absolute",
    bottom: -35,
  },
  walBtn: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 19,
    color: "#3E4C6E",
  },
  payHistCont: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: 420,
  },
  payHistText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 17,
    color: "#B5BAC6",
    paddingBottom: 10,
  },
});
