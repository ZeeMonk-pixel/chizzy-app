import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import RideCard, { RideProps } from "@/components/ride-card";
import { useRouter } from "expo-router";
import { useRide } from "@/app/context/context";

type Props = {};

const { width } = Dimensions.get("window");

const AvailableRiders = (props: Props) => {
  const [active, setActive] = useState("real");
  const { setSelectedRide } = useRide();
  const router = useRouter();

  const cardArr: RideProps[] = [
    {
      carColor: "Blue",
      noOfSeats: 2,
      carName: "Camry",
      price: "₦5,000",
      driver: "Kolade Ahmed",
    },
    {
      carColor: "Red",
      noOfSeats: 2,
      carName: "Corolla",
      price: "₦5,000",
      driver: "Kolade Ibiyemi",
    },
    {
      carColor: "White",
      noOfSeats: 4,
      carName: "Sienna",
      price: "₦5,000",
      driver: "Bolaji Durosaye",
    },
    {
      carColor: "White",
      noOfSeats: 7,
      carName: "Bus",
      price: "₦5,000",
      driver: "Bayo Onaoga",
    },
  ];
  const cardArrSch: RideProps[] = [
    {
      carColor: "Blue",
      noOfSeats: 2,
      carName: "Camry",
      price: "₦5,000",
      driver: "Kolade Ahmed",
      departureTime: '12:30pm',
      departureDate: 'Today'
    },
    {
      carColor: "Purple",
      noOfSeats: 1,
      carName: "Camry",
      price: "₦5,000",
      driver: "Damilola Somope",
      departureTime: '12:30pm',
      departureDate: 'Today'
    },
    {
      carColor: "Red",
      noOfSeats: 2,
      carName: "Corolla",
      price: "₦5,000",
      driver: "Kolade Ibiyemi",
      departureTime: '12:30pm',
      departureDate: '03-03-2024'
    },
    {
      carColor: "White",
      noOfSeats: 4,
      carName: "Sienna",
      price: "₦4,000",
      driver: "Bolaji Durosaye",
      departureTime: '12:30pm',
      departureDate: '04-03-2024'
    },
    {
      carColor: "White",
      noOfSeats: 7,
      carName: "Bus",
      price: "₦6,500",
      driver: "Bayo Onaoga",
      departureTime: '12:30pm',
      departureDate: '03-03-2024'
    },
    {
      carColor: "White",
      noOfSeats: 8,
      carName: "Bus",
      price: "₦7,000",
      driver: "Emmanuel Bliss",
      departureTime: '01:30pm',
      departureDate: '05-03-2024'
    },
  ];


  const clickRider = (item: RideProps) => {
    setSelectedRide(item);
    router.push('/(tabs)/home/meet-rider');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.rideCont}>
        <View style={styles.rideHead}>
          <GoBack />
          <Text style={styles.rideHeadText}>Available riders</Text>
        </View>
        <View style={styles.rideOptions}>
          <TouchableOpacity
            style={[
              styles.rideReal,
              active === "scheduled" && styles.inactiveReal,
            ]}
            onPress={() => setActive("real")}
          >
            <Text
              style={[
                styles.rideRealText,
                active === "scheduled" && styles.inactiveText,
              ]}
            >
              Real-time ({cardArr.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rideReal, active === "real" && styles.inactiveReal]}
            onPress={() => setActive("scheduled")}
          >
            <Text
              style={[
                styles.rideRealText,
                active === "real" && styles.inactiveText,
              ]}
            >
              Scheduled ({cardArrSch.length})
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ridersCont}>
          <RideCard riders={active === 'real' ? cardArr : cardArrSch} onPress={clickRider} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AvailableRiders;

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
  rideOptions: {
    flexDirection: "row",
    width: 239,
    height: 39,
    backgroundColor: "rgba(217, 217, 217, 0.15)",
    borderRadius: 30,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveReal: {
    backgroundColor: "transparent",
    boxShadow: "transparent",
    borderRadius: 0,
  },
  rideReal: {
    width: 115,
    height: 32,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.06)",
    borderRadius: 30,
    justifyContent: "center",
  },
  rideRealText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 24,
    color: "#3E4C6E",
    textAlign: "center",
  },
  inactiveText: {
    color: "rgba(125, 125, 125, 0.55)",
  },
  ridersCont: {
    paddingVertical: 20,
  }
});
