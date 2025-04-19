import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Btn } from "@/components/btn";
import { Overlay } from "@/components/utils";
import NotiBadge from "./noti-badge";
import { useRouter } from "expo-router";

type Props = {};

const InstantNot = (props: Props) => {

    const [isNot, setIsNot] = useState(false);
    const router = useRouter();

    const clickNotify = () => {
        setIsNot(true);
    }

  return (
    <SafeAreaView style={styles.insCont}>
        {isNot && <Overlay />}
        {isNot && <NotiBadge />}
      <Image
        style={styles.insImage}
        source={require("../../assets/images/nots.png")}
      />
      <View style={styles.insTextCont}>
        <Text style={styles.insTextHead}>Instant Notifications</Text>
        <Text style={styles.insTextBody}>
          Chizy Rides offers ride notifications to keep you informed about your
          trips. Choose what you want to be notified about in your settings
        </Text>
      </View>
      <View style={styles.insBtnCont}>
        <Btn text="Get notified" onPress={clickNotify} />
        <TouchableOpacity style={styles.loginCont} onPress={() => router.push("/(auth)/complete-account")}>
          <Text style={styles.login}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InstantNot;

const styles = StyleSheet.create({
  insCont: {
    padding: 20,
    // borderColor: 'red',
    // borderWidth: 2,
    height: "100%",
    flex: 1,
    position: "relative"
  },
  insImage: {
    marginHorizontal: "auto",
    marginTop: 60,
  },
  insTextCont: {
    paddingVertical: 80,
    gap: 20,
  },
  insTextHead: {
    fontFamily: 'Inter_600SemiBold',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: "#181619",
  },
  insTextBody: {
    fontFamily: 'Inter_400Regular',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
  insBtnCont: {
    gap: 10,
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: "auto"
  },
  loginCont: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  login: {
    fontFamily: 'Inter_500Medium',
    fontStyle: "normal",
    // fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#18181B",
  },
});
