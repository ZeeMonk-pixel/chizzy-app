import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export type RideProps = {
  carColor: string;
  carName: string;
  noOfSeats: number;
  price: string;
  driver: string;
  departureTime?: string;
  departureDate?: string;
};

type RideOptions = {
  riders: RideProps[];
  onPress: (item: RideProps) => void;
};

const RideCard = ({ riders, onPress }: RideOptions) => {
  return (
    <View style={{maxHeight: 550}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={riders}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.rideCardCont} onPress={() => onPress(item)}>
              <View style={styles.rideCard}>
                <View style={styles.rideCardFlex}>
                  <View style={styles.carRide}>
                    {item?.carName === 'Bus' ? <Image source={require("../assets/images/bus.png")} /> : item?.carName === "Sienna" ? <Image source={require("../assets/images/minibus.png")} /> : <Image source={require("../assets/images/carRide.png")} />}
                  </View>
                  <View style={styles.rideDetails}>
                    <Text style={styles.driverText}>{item?.driver}</Text>
                    <View style={styles.carDetails}>
                      <View style={styles.carTypeCont}>
                        <Image source={require("../assets/images/car.png")} />
                        <Text style={styles.carTypeText}>
                          {item?.carColor} {item?.carName}
                        </Text>
                      </View>
                      <View style={styles.carTypeCont}>
                        <Image source={require("../assets/images/seat.png")} />
                        <Text style={styles.carTypeText}>
                          {item?.noOfSeats} {" Seats"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.ridePrice}>{item?.price}</Text>
              </View>
              {item?.departureTime && <View style={styles.scheduleCont}>
                <Text style={styles.scheduleTime}>Departure time: <Text style={styles.scheduleDate}>{item?.departureTime}</Text></Text>
                <Text style={styles.scheduleDate}>{item?.departureDate}</Text>
              </View>}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?.driver}
        />
    </View>
  );
};

export default RideCard;

const styles = StyleSheet.create({
    rideCardCont: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 1px 11px rgba(0, 0, 0, 0.08)",
        borderRadius: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
  rideCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rideCardFlex: {
    flexDirection: "row",
    gap: 25,
  },
  carRide: {
    width: 65,
    height: 52,
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  rideDetails: {
    gap: 10,
  },
  carDetails: {
    flexDirection: "row",
    gap: 15,
  },
  driverText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 24,
    color: "#3E4C6E",
  },
  ridePrice: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 24,
    color: "#3E4C6E",
  },
  carTypeCont: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  carTypeText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 20,
    color: "#7D7D7D",
  },
  scheduleCont: {
    flexDirection: 'row',
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2CC',
    gap: 20
  },
  scheduleTime: {
    fontFamily: 'Inter_400Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 20,
    color: '#3E4C6E',
},
scheduleDate: {
      fontFamily: 'Inter_600SemiBold',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 10,
      lineHeight: 20,
      color: '#3E4C6E',
  },
});
