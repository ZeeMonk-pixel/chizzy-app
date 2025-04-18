import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Btn } from "@/components/btn";

type Props = {};

const CompleteAccount = (props: Props) => {
  return (
    <SafeAreaView style={styles.completeCont}>
      <Image
        style={{ marginBottom: 15 }}
        source={require("../../assets/images/ready.png")}
      />
      <View style={styles.completeBody}>
        <Text style={styles.headText}>Your account is set</Text>
        <Text style={styles.bodyText}>
          You account is ready, we’re excited for you!
        </Text>
      </View>
      <View style={styles.completeBtn}>
        <Btn text="Let's go" />
      </View>
    </SafeAreaView>
  );
};

export default CompleteAccount;

const styles = StyleSheet.create({
  completeCont: {
    padding: 15,
    paddingTop: 150,
    height: "100%",
    // borderColor: "red",
    // borderWidth: 2,
  },
  completeBody: {
    gap: 20,
    height: "auto",
  },
  headText: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: "#181619",
  },
  bodyText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
  },
  completeBtn: {
    marginTop: "auto",
  },
});
