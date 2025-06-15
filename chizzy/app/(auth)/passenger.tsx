import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { CustomInput, CustomPhoneInput } from "@/components/utils";
import { Btn } from "@/components/btn";
import { useRouter } from "expo-router";
import { useAuth, useUser } from "../context/context";
import * as Device from "expo-device";
import * as Application from "expo-application";
import { Platform } from "react-native";
import { AxiosPost } from "../api/axios";
import { saveSecurely } from "@/utils/storage";

type Props = {};

const Passenger = (props: Props) => {
  const url = "user/AuthenticateUser";
  const { authData } = useAuth();
  const { setUserData } = useUser();
  const router = useRouter();
  const [deviceType, setDeviceType] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [deviceId, setDeviceId] = useState<string | null>();
  const [data, setData] = useState({
    phoneNumber: "",
    userName: "",
  });
  const [dataErr, setDataErr] = useState({
    phoneNumber: "",
    userName: "",
  });

  useEffect(() => {
    const getDeviceInfo = async () => {
      const deviceType = Device.osName;

      let deviceId: string | null = null;
      deviceId = Application.getAndroidId();
      if (Platform.OS === "ios") {
        deviceId = await Application.getIosIdForVendorAsync();
      }
      setDeviceType(deviceType);
      setDeviceId(deviceId);
    };

    getDeviceInfo();
  }, []);

  const changeData = (key: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const dataObj = {
    clusterId: 0,
    id: authData?.idToken,
    userName: data?.userName,
    initials:
      (authData?.user?.givenName?.[0]?.toUpperCase() ?? "") +
      (authData?.user?.familyName?.[0]?.toUpperCase() ?? ""),
    dateCreated: "2025-05-15T09:00:04.594Z",
    email: authData?.user?.email,
    phoneNumber: "+234" + data?.phoneNumber,
    isApproved: true,
    status: 1,
    isOnboardingComplete: true,
    provider: "gmail",
    role: 1,
    deviceType: deviceType,
    deviceId: deviceId,
    walletBalance: 0,
    averageRating: 0,
    vehicle: "string",
    vehicleModel: "string",
    vehicleType: "string",
    bank: "string",
    accountNumber: "string",
    accountName: "string",
    vehicleColor: "string",
    numberPlate: "string",
    count: 0,
    totalTrips: 0,
    whatsappContactUrl: "string",
    referralCode: "",
    referredBy: "string",
    referralRewardClaimed: true,
  };

  const clickNext = async () => {
    setIsLoading(true);
    // console.log(dataObj);
    try {
      const res = await AxiosPost(url, dataObj);
      // console.log(res);

      if (res.statusCode === 200) {
        await saveSecurely("userAppData", res);
        setUserData(res);
        router.replace("/(auth)/instant-not");
      } else {
        console.log("API error:", res);
      }
    } catch (err) {
      console.error("Request failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
            <CustomPhoneInput
              label="Phone Number"
              placeholder="8156987545"
              id="phoneNumber"
              value={data?.phoneNumber}
              changeData={(text) => changeData("phoneNumber", text)}
              err={dataErr.phoneNumber}
            />
            <CustomInput
              placeholder="Your username"
              label="Username"
              id="username"
              value={data?.userName}
              changeData={(text) => changeData("userName", text)}
              err={dataErr.userName}
            />
            <Text style={styles.terms}>
              By continuing you have agreed to our{" "}
              <Text style={{ color: "#8441F1" }}>terms and conditions</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.passBtn}>
        <Btn
          text="Next"
          onPress={clickNext}
          loading={isLoading}
          disabled={!data.phoneNumber || !data.userName}
        />
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
    fontFamily: "Inter_400Regular",
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
  },
  inputCont: {
    paddingVertical: 20,
    gap: 30,
  },
  terms: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
  passBtn: {
    // borderColor: "red",
    // borderWidth: 2,
    // paddingTop: 90
  },
});
