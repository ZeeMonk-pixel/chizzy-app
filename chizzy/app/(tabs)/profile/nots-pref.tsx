import {
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import Select, { SelectOption } from "@/components/select";
import ScheduledNots, { NotsType } from "@/components/scheduled-nots";

type Props = {};

const { width } = Dimensions.get("window");

const NotsPref = (props: Props) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [selectedDes, setSelectedDes] = useState<string | undefined>(undefined);
  const optionsPickup: SelectOption[] = [
    {
      id: "1",
      label: "Oshodi Bus Stop",
      value: "Oshodi Bus Stop",
    },
    { id: "2", label: "Mile 2", value: "Mile 2" },
    {
      id: "3",
      label: "Ojota Bus stop",

      value: "Ojota Bus stop",
    },
    {
      id: "4",
      label: "Oshodi Bus Stop",
      value: "Oshodi Bus Stop",
    },
    { id: "5", label: "Mile 2", value: "Mile 2" },
    {
      id: "6",
      label: "Ojota Bus stop",

      value: "Ojota Bus stop",
    },
  ];
  const optionsDestination: SelectOption[] = [
    {
      id: "1",
      label: "Type of trip",
      value: "Office",
    },
    {
      id: "2",
      label: "Type of trip",
      value: "Office",
    },
    {
      id: "3",
      label: "Type of trip",
      value: "Office",
    },
    {
      id: "4",
      label: "Type of trip",
      value: "Office",
    },
  ];
  const scheduledNotsArr: NotsType[] = [
    { id: "1", from: "CMS Bus stop", to: "Obalende Bus Stop" },
    { id: "2", from: "Oshodi Bus stop", to: "Obalende Bus Stop" },
    { id: "3", from: "CMS Bus stop", to: "Ajah Bus Stop" },
    { id: "4", from: "CMS Bus stop", to: "Bariga Bus Stop" },
    { id: "5", from: "Ikorodu Bus stop", to: "Obalende Bus Stop" },
    { id: "6", from: "CMS Bus stop", to: "Obalende Bus Stop" },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../../assets/images/walletBg.png")} // or use a URL
        style={styles.background}
        resizeMode="cover" // or 'contain', 'stretch', etc.
      >
        <SafeAreaView style={styles.rideCont}>
          <View style={styles.rideHead}>
            <GoBack color="white" />
            <Text style={styles.rideHeadText}>Notification preference</Text>
          </View>
        </SafeAreaView>
        <View style={styles.cardsHolder}>
          <View style={[styles.profHead, { backgroundColor: "white" }]}>
            <Select
              placeholder="Pick up bus-stop"
              options={optionsPickup}
              selectedValue={selected}
              onValueChange={setSelected}
              isLabel
              iconName="compass"
            />
            <Select
              placeholder="Type of Trip"
              options={optionsDestination}
              selectedValue={selectedDes}
              onValueChange={setSelectedDes}
              isLabel
              iconName="steering"
            />
          </View>
          <TouchableOpacity style={styles.setNot}>
            <Text style={styles.notText}>
              Schedule notification for this route
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.notsBtm}>
        <Text style={styles.notsBtmText}>My route notifications</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={scheduledNotsArr}
          renderItem={({ item }) => (
            <ScheduledNots to={item?.to} from={item?.from} id={item?.id} />
          )}
          keyExtractor={(item) => item?.id}
        />
      </View>
    </>
  );
};

export default NotsPref;

const styles = StyleSheet.create({
  background: {
    position: "relative",
    paddingBottom: 45,
  },
  rideCont: {
    padding: 10,
  },
  rideHead: {
    flexDirection: "row",
    gap: width / 8,
    alignItems: "center",
    paddingVertical: 15,
  },
  rideHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "white",
    textAlign: "center",
  },
  profHead: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.03)",
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  cardsHolder: {
    gap: 20,
  },
  setNot: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.03)",
    borderRadius: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
  },
  notText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
  notsBtm: {
    padding: 20,
    gap: 10,
    // borderColor: 'red',
    // borderWidth: 1,
    height: 320,
  },
  notsBtmText: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    color: "#3E4C6E",
  },
});
