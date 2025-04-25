import {
    Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRide } from "@/app/context/context";
import GoBack from "@/components/go-back";
import { SittingAccordion } from "@/components/accordion";
import { Ionicons } from "@expo/vector-icons";
// import * as Clipboard from 'expo-clipboard';
import * as Clipboard from 'expo-clipboard';
import { CopyAlert } from "@/components/alert";
import { CustomCheckbox } from "@/components/utils";
import { Btn } from "@/components/btn";
import { useRouter } from "expo-router";

// type ClickToCopyProps = {
//   textToCopy: string;
// }

type Props = {};

const { width } = Dimensions.get("window");

const MeetRider = (props: Props) => {
  const { selectedRide } = useRide();

  if (!selectedRide) return <Text>No ride selected</Text>;

  const router = useRouter();

  const [isCopied, setIsCopied] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCopy = async (textToCopy: string) => {
    await Clipboard.setStringAsync(textToCopy);
    setIsCopied(true);
  };

  const bookRide = () => {
    if(!isDisabled){
        setIsDisabled(true);
    }
    if(checked){
        router.push('/(tabs)/home/arrived');
    }
  }

  return (
    <SafeAreaView style={styles.rideCont}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rideHead}>
          <GoBack />
          <Text style={styles.rideHeadText}>Meet your driver</Text>
        </View>
        <View style={styles.driverProfile}>
          <Image
            style={styles.driverImg}
            source={require("../../../assets/images/profile.png")}
          />
          <Text style={styles.driverName}>{selectedRide?.driver}</Text>
          <Text style={styles.driverRating}>⭐ 5 . 324 Reviews</Text>
        </View>
        <View style={styles.rideInfo}>
          <SittingAccordion text="Make sure you confirm the ride details before getting into the ride." />
          <View style={styles.carInfo}>
            <Text style={styles.carInfoLeft}>Brand</Text>
            <Text style={styles.carInfoRight}>{selectedRide?.carName}</Text>
          </View>
          <View style={styles.carInfo}>
            <Text style={styles.carInfoLeft}>Color</Text>
            <Text style={styles.carInfoRight}>{selectedRide?.carColor}</Text>
          </View>
          <View style={styles.carInfo}>
            <Text style={styles.carInfoLeft}>Model</Text>
            <Text style={styles.carInfoRight}>2004</Text>
          </View>
          <View style={styles.carInfo}>
            <Text style={styles.carInfoLeft}>Plate Number</Text>
            <Text style={styles.carInfoRight}>128</Text>
          </View>
          {isDisabled && <View style={styles.carInfo}>
            <Text style={styles.carInfoLeft}>Contact Number</Text>
            <TouchableOpacity style={{flexDirection: 'row', gap: 3, alignItems: 'center', position: 'relative'}} onPress={() => handleCopy('07056998852')}>
              <Text style={styles.carInfoRight}>07056998852</Text>
              <Ionicons name={"copy"} size={10} color={"#8441F1"} />
              {isCopied && <CopyAlert text='Copied!' isShow={isCopied} setIsShow={setIsCopied} />}
            </TouchableOpacity>
          </View>}
        </View>
        {isDisabled && <View style={styles.confirmPenalty}>
            <CustomCheckbox checked={checked} setChecked={setChecked} />
            <Text style={styles.confirmPenaltyText}>Kindly check this box to confirm that you are aware there will be penalty for not showing up for your ride.</Text>
        </View>}
        <View style={{marginHorizontal: 'auto', width: "85%", marginTop: !isDisabled ? 30 : 0}}>
            <Btn text="Book ride" onPress={bookRide} disabled={checked ? false : isDisabled} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeetRider;

const styles = StyleSheet.create({
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
    color: "#3E4C6E",
    textAlign: "center",
  },
  driverProfile: {
    // gap: 10,
    marginHorizontal: "auto",
    alignItems: "center",
    marginVertical: 30,
  },
  driverImg: {
    marginBottom: 10,
  },
  driverName: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: "#566280",
  },
  driverRating: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 24,
    color: "#202530",
  },
  rideInfo: {
    alignItems: "center",
  },
  carInfo: {
    padding: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2CC",
    width: "85%",
  },
  carInfoLeft: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 24,
    color: "#7D7D7D",
  },
  carInfoRight: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 24,
    color: " #566280",
  },
  confirmPenalty: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '85%',
    // height: 63.5,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginHorizontal: 'auto',
    marginVertical: 25
  },
  confirmPenaltyText: {
    fontFamily: 'Inter_400Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    color: '#7D7D7D',
    width: '90%'
  }
});
