import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RideHistory, { RideCardProps } from "@/components/ride-history";
import ViewTrip from "@/components/view-trip";

type Props = {};

const Rides = (props: Props) => {
  const [active, setActive] = useState("real");
  const [showRide, setShowRide] = useState(false);
  const [curRide, setCurRide] = useState<RideCardProps | undefined>();

  const curRideArr: RideCardProps[] = [
    {
      name: "Dele Farotimi",
      from: "CMS Bus stop",
      amount: "₦10,000",
      to: "Obalende Bus stop",
      checkIn: "3:12PM",
      checkOut: "4:20PM",
      date: "02-May-2023",
      seat: "3 seats booked",
      status: "Ongoing",
      id: "1",
    },
    {
      name: "Sade Gbesigbe",
      from: "CMS Bus stop",
      amount: "₦10,000",
      to: "Obalende Bus stop",
      departureTime: "3:12PM",
      date: "02-May-2023",
      seat: "6 seats booked",
      status: "Scheduled",
      id: "2",
    },
  ]
  const rideHistArr: RideCardProps[] = [
    {
      name: "Blade Osibanjo",
      from: "CMS Bus stop",
      amount: "₦10,000",
      to: "Obalende Bus stop",
      checkIn: "3:12PM",
      checkOut: "4:20PM",
      date: "02-May-2023",
      seat: "2 seats booked",
      status: "Trip Successful",
      id: "1",
    },
    {
      name: "Emmanuel Segnowe",
      from: "CMS Bus stop",
      amount: "₦10,000",
      to: "Obalende Bus stop",
      checkIn: "3:12PM",
      checkOut: "4:20PM",
      date: "02-May-2023",
      seat: "6 seats booked",
      status: "Trip Canceled",
      id: "2",
    },
    {
      name: "Kolade Ahmed",
      from: "CMS Bus stop",
      amount: "₦10,000",
      to: "Obalende Bus stop",
      checkIn: "3:12PM",
      checkOut: "4:20PM",
      date: "02-May-2023",
      seat: "4 seats booked",
      status: "Trip Successful",
      id: "3",
    },
    {
      name: "Sade Iniyo",
      from: "CMS Bus stop",
      amount: "₦10,000",
      to: "Obalende Bus stop",
      checkIn: "3:12PM",
      checkOut: "4:20PM",
      date: "02-May-2023",
      seat: "7 seats booked",
      status: "Trip Canceled",
      id: "4",
    },
  ];

  const clickTrip = (item: RideCardProps) => {
    setShowRide(true);
    setCurRide(item);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.rideHead}>
          <Text style={styles.rideHeadText}>My Rides</Text>
        </View>
        <View style={styles.rideOptions}>
          <TouchableOpacity
            style={[
              styles.rideReal,
              active === "scheduled" && styles.inactiveReal,
            ]}
            onPress={() => {setActive("real"); if(showRide){setShowRide(false)}}}
          >
            <Text
              style={[
                styles.rideRealText,
                active === "scheduled" && styles.inactiveText,
              ]}
            >
              Current ride ({curRideArr?.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.rideReal, active === "real" && styles.inactiveReal]}
            onPress={() => {setActive("scheduled"); if(showRide){setShowRide(false)}}}
          >
            <Text
              style={[
                styles.rideRealText,
                active === "real" && styles.inactiveText,
              ]}
            >
              Ride history
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.rideHistCont, {marginTop: active === 'real' &&  showRide ? 0 : 40}]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={active === "real" ? curRideArr : rideHistArr}
            renderItem={({ item }) => (
              <RideHistory
                name={item?.name}
                amount={item?.amount}
                date={item?.date}
                to={item?.to}
                from={item?.from}
                seat={item?.seat}
                status={item?.status}
                id={item?.id}
                checkIn={item?.checkIn}
                departureTime={item?.departureTime}
                checkOut={item?.checkOut}
                onPress={() =>active === "real" && clickTrip(item)}
              />
            )}
            keyExtractor={(item) => item?.id}
          />
          {active === 'real' &&  showRide && curRide && <ViewTrip item={curRide} />}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Rides;

const styles = StyleSheet.create({
  rideCont: {
    padding: 10,
  },
  rideHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    width: 243,
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
    width: 120,
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
  rideHistCont: {
    paddingHorizontal: 20,
    marginVertical: 40,
    gap: 30,
    height: 550
  },
});
