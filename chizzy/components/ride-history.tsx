import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export type RideCardProps = {
    name: string;
    amount: string;
    from: string;
    to: string;
    checkIn?: string;
    checkOut?: string;
    date: string;
    seat: string;
    status: string;
    id: string;
    departureTime?: string;
};

const RideHistory = ({name, amount, from, to, checkIn, checkOut, date, seat, status, departureTime}: RideCardProps) => {
    // console.log(status);

  return (
    <View>
      <View style={[styles.rideCardTop, {backgroundColor: status === 'Trip Successful' ? 'rgb(245, 250, 241)' : status === 'Ongoing' ? 'rgb(253, 239, 216)' : status === 'Scheduled' ? 'rgb(241, 234, 251)' : 'rgb(252, 240, 240)'}]}>
        <Text style={styles.rideCardTopText}>{date}</Text>
        <Text style={styles.rideCardTopText}>{seat}</Text>
        <Text style={[styles.rideCardTopText, {color: status === 'Trip Successful' ? '#76D31A' : status === 'Ongoing' ? '#D31A1A' : status === 'Scheduled' ? '#8441F1' : '#D31A1A'}]}>{status}</Text>
      </View>
      <View style={styles.rideCard}>
        <View style={styles.rideCardLeft}>
          <Text style={styles.rideCardName}>{name}</Text>
          <View style={styles.rideRouteCont}>
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
        </View>
        <View style={styles.rideCardRight}>
          <Text style={styles.rideCardName}>{amount}</Text>
          {checkIn && <View style={styles.rideRouteFrom}>
            <Text style={styles.rideRouteText1}>Check in time</Text>
            <Text style={styles.rideRouteText2}>{checkIn}</Text>
          </View>}
          {checkOut && <View style={styles.rideRouteFrom}>
            <Text style={styles.rideRouteText1}>Check out time</Text>
            <Text style={styles.rideRouteText2}>{checkOut}</Text>
          </View>}
          {departureTime && <View style={styles.rideRouteFrom}>
            <Text style={styles.rideRouteText1}>Departure time</Text>
            <Text style={styles.rideRouteText2}>{departureTime}</Text>
          </View>}
        </View>
      </View>
    </View>
  );
};

export default RideHistory;

const styles = StyleSheet.create({
    rideCardTop: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginHorizontal: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    rideCardTopText: {
        fontFamily: 'Inter_400Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 12,
        color: '#3E4C6E',
    },
    rideCard: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 11px rgba(0, 0, 0, 0.08)',
        borderRadius: 10,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    rideCardLeft: {
        gap: 8,
    },
    rideCardRight: {
        gap: 8,
    },
    rideCardName: {
        fontFamily: 'Inter_600SemiBold',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 17,
        color: '#3E4C6E',
    },
    rideRouteCont: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    rideRoute: {
        gap: 5,
    },
    rideRouteFrom: {},
    rideRouteText1: {
        fontFamily: 'Inter_400Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 6,
        lineHeight: 17,
        color: '#B5BAC6',
    },
    rideRouteText2: {
        fontFamily: 'Inter_600SemiBold',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 10,
        lineHeight: 10,
        color: '#3E4C6E',
    },
});
