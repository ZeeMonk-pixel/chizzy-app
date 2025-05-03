import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type NotsType = {
  id: string;
  from?: string;
  to?: string;
};

const ScheduledNots = ({ id, from, to }: NotsType) => {
  return (
    <View style={styles.notsCont}>
      <View style={styles.notsContRight}>
        <Image source={require("../assets/images/route.png")} />
        <View style={styles.rideRoute}>
          <View style={styles.rideRouteFrom}>
            <Text style={styles.rideRouteText1}>From</Text>
            <Text style={styles.rideRouteText2}>{from}</Text>
          </View>
          <View style={styles.rideRouteFrom}>
            <Text style={styles.rideRouteText1}>To</Text>
            <Text style={styles.rideRouteText2}>{to}</Text>
          </View>
        </View>
      </View>
      <View style={styles.notsContLeft}>
      <MaterialCommunityIcons
              name={'delete'}
              size={24}
              color={"#D0D0D0"}
            />
      </View>
    </View>
  );
};

export default ScheduledNots;

const styles = StyleSheet.create({
  notsCont: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notsContRight: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  rideRoute: {
    gap: 5,
  },
  rideRouteFrom: {},
  rideRouteText1: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 6,
    lineHeight: 17,
    color: "#B5BAC6",
  },
  rideRouteText2: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 10,
    lineHeight: 10,
    color: "#3E4C6E",
  },
  notsContLeft: {},
});
