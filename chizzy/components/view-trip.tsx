import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RideCardProps } from "./ride-history";
import { Ionicons } from "@expo/vector-icons";
import { Btn, RedBtn } from "./btn";

type Props = {
  item: RideCardProps;
};

const ViewTrip = ({ item }: Props) => {
  return (
    <View style={styles.viewTrip}>
      <View style={styles.viewAccord}>
        <Ionicons name="alarm" size={24} color="white" />
        <Text style={styles.viewAccordText}>20 minutes into this trip</Text>
      </View>
      <View style={styles.viewTripBody}>
        <View style={styles.viewTripProfHead}>
          <View style={styles.viewTripProfLeft}>
            <Image source={require("../assets/images/smallProfileImg.png")} />
            <View style={styles.viewTripProfLeftText}>
              <Text style={styles.viewTripProfLeftText1}>{item?.name}</Text>
              <Text style={styles.viewTripProfLeftText2}>
                Sienna . EDY-128-GF
              </Text>
            </View>
          </View>
          <View style={styles.viewTripProfRight}>
            <Text style={styles.viewTripProfAmount}>{item?.amount}</Text>
          </View>
        </View>
        <View style={styles.viewTripImg}>
          <Image source={require("../assets/images/bigMiniBus.png")} />
        </View>

        <View style={styles.carInfo}>
          <Text style={styles.carInfoLeft}>Pick-up bus stop</Text>
          <Text style={styles.carInfoRight}>{item?.from}</Text>
        </View>
        <View style={styles.carInfo}>
          <Text style={styles.carInfoLeft}>Destination bus stop</Text>
          <Text style={styles.carInfoRight}>{item?.to}</Text>
        </View>
        <View style={styles.carInfo}>
          <Text style={styles.carInfoLeft}>
            {item?.status === "Ongoing" ? "Check in time" : "Departure time"}
          </Text>
          <Text style={styles.carInfoRight}>
            {item?.status === "Ongoing" ? item?.checkIn : item?.departureTime}
          </Text>
        </View>
        {item?.status === "Scheduled" && (
          <View
            style={[
              styles.carInfo,
              {
                paddingTop: 15,
                borderTopColor: "rgba(0, 0, 0, 0.14)",
                borderTopWidth: 0.5,
                marginTop: 15,
              },
            ]}
          >
            <Text style={styles.carInfoLeft}>Call pilot</Text>
            <Ionicons name="call" size={24} color="#8441F1" />
          </View>
        )}
        {item?.status === "Scheduled" && <View style={styles.viewBtn}>
          <RedBtn text="Cancel trip" />
          </View>}
        {item?.status === "Ongoing" && (
          <View style={styles.busStopView}>
            <Text style={styles.busStopText1}>Last bus stop</Text>
            <Text style={styles.busStopText2}>Abraham Adesanya bus stop</Text>
          </View>
        )}
        {item?.status === "Ongoing" && (
          <View style={styles.busStopView}>
            <Text style={styles.busStopText1}>Next bus stop</Text>
            <Text style={styles.busStopText2}>CMS bus stop</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ViewTrip;

const styles = StyleSheet.create({
  viewTrip: {
    height: "100%",
    backgroundColor: "white",
    zIndex: 2,
  },
  viewAccord: {
    backgroundColor: "#8441F1",
    borderRadius: 20,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 10,
    height: 200
  },
  viewAccordText: {
    fontFamily: 'Inter_500Medium',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  viewTripBody: {
    backgroundColor: "rgb(251, 249, 254)",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderColor: 'red',
    // borderWidth: 2,
    position: 'absolute',
    top: 43,
    height: '92%'
  },
  viewTripProfHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewTripProfLeft: {
    flexDirection: "row",
    gap: 10,
  },
  profImg: {
    width: 45,
    height: 45,
    // borderRadius: '50%'
  },
  viewTripProfLeftText: {},
  viewTripProfLeftText1: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: "#566280",
  },
  viewTripProfLeftText2: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 24,
    color: " #202530",
  },
  viewTripProfRight: {},
  viewTripProfAmount: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: "#8441F1",
  },
  viewTripImg: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    borderBottomColor: "rgba(0, 0, 0, 0.14)",
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  carInfo: {
    padding: 5,
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
  busStopView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  busStopText1: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 24,
    color: "#7D7D7D",
  },
  busStopText2: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 24,
    color: "#000000",
  },
  viewBtn: {
    marginTop: 'auto'
  },
});
