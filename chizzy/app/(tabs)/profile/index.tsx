import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { deleteSecurely } from "@/utils/storage";
import { useAuth } from "@/app/context/context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

type Props = {};

const Profile = (props: Props) => {
  const router = useRouter();
    const { setAuthData } = useAuth();

  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      deleteSecurely("userAppData");
      setAuthData(null);
      router.replace("/(auth)/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.profCont}>
        <View style={styles.profHeader}>
          <Text style={styles.profHeaderText}>Profile</Text>
        </View>
        <View style={styles.profHead}>
          <View style={styles.profHeadPic}>
            <Text style={styles.profHeadPicText}>EU</Text>
          </View>
          <Text style={styles.profTextName}>Eric Ubong</Text>
          <Text style={styles.profTextEmail}>ericubong@email.con</Text>
          <Text style={styles.profTextTrip}>35 Trips</Text>
        </View>
        <TouchableOpacity
          style={styles.nots}
          onPress={() => router.push("/profile/nots-pref")}
        >
          <Ionicons name="notifications" color={"#8441F1"} size={20} />
          <Text style={styles.notsText}>
            My routes & notification preference
          </Text>
        </TouchableOpacity>
        <View style={styles.lineBreak}></View>
        <TouchableOpacity style={styles.terms}>
          <Ionicons
            name="information-circle-outline"
            color={"#C2CCDE"}
            size={20}
          />
          <Text style={styles.termsText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.terms} onPress={logout}>
          <Ionicons name="log-out-outline" color={"#C2CCDE"} size={20} />
          <Text style={styles.termsText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.contactUs}>
          <Text style={styles.contactUsText}>
            Contact us{" "}
            <Text style={[styles.contactUsText, { color: "#8441F1" }]}>
              here
            </Text>{" "}
            for in case you have any complaints or support needs.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profCont: {
    height: "100%",
  },
  profHeader: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  profHeaderText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: "#3E4C6E",
  },
  profHead: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 15,
  },
  profHeadPic: {
    width: 77,
    height: 77,
    borderRadius: "50%",
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  profHeadPicText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 32,
    color: "#FFFFFF",
  },
  profTextName: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 25,
    color: "#3E4C6E",
  },
  profTextEmail: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 18,
    color: "#3E4C6E",
  },
  profTextTrip: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 17,
    color: "#8441F1",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  nots: {
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    gap: 15,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: "auto",
    marginTop: 25,
  },
  notsText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 17,
    color: "#3E4C6E",
  },
  lineBreak: {
    width: "80%",
    marginHorizontal: "auto",
    borderBottomColor: "#F2F2F2CC",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  terms: {
    flexDirection: "row",
    paddingVertical: 20,
    gap: 10,
    alignItems: "center",
    width: "80%",
    marginHorizontal: "auto",
    borderBottomColor: "#F2F2F2CC",
    borderBottomWidth: 1,
  },
  termsText: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    color: "#3E4C6E",
  },
  contactUs: {
    marginTop: "auto",
    width: "80%",
    marginHorizontal: "auto",
    alignItems: "center",
    marginBottom: 40,
  },
  contactUsText: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    color: "#3E4C6E",
    textAlign: "center",
    alignItems: "center",
  },
});
