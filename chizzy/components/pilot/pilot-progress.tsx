import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  route: string;
};

const PilotProgress = ({route}: Props) => {

    const [active, setActive] = useState('/pilot/pilot');
    const [personalComplete, setPersonalComplete] = useState(false);
    const [vehComplete, setVehComplete] = useState(false);


    useEffect(() => {
        if(route === '/pilot/pilot'){
            setActive('/pilot/pilot');
            setPersonalComplete(false);
        }
        if(route === '/pilot/vehicle-details'){
            setActive('/pilot/vehicle-details');
            setPersonalComplete(true);
            setVehComplete(false);
        }
        if(route === '/pilot/acc-details'){
            setActive('/pilot/acc-details');
            setVehComplete(true);
            setPersonalComplete(true);
        }
    },[route]);
    

  return (
    <View style={styles.pilotProgress}>
      <View style={styles.pilotProgressView}>
        {!personalComplete && <View style={[styles.pilotTextView, active && styles.pilotTextActiveView]}>
          <Text style={styles.pilotProgressText1}>1</Text>
        </View>}
        {personalComplete && <Ionicons name="checkmark-circle" size={16} color="#76D31A" />}
        <Text style={[styles.pilotProgressText2, active && styles.activeColor]}>Personal details</Text>
      </View>
      <View style={styles.pilotProgressView}>
        {!vehComplete && <View style={[styles.pilotTextView, active === '/pilot/vehicle-details' || active === '/pilot/acc-details' ? styles.pilotTextActiveView : '']}>
          <Text style={styles.pilotProgressText1}>2</Text>
        </View>}
        {vehComplete && <Ionicons name="checkmark-circle" size={16} color="#76D31A" />}
        <Text style={[styles.pilotProgressText2, active === '/pilot/vehicle-details' || active === '/pilot/acc-details' ? styles.activeColor : '']}>Vehicle details</Text>
      </View>
      <View style={styles.pilotProgressView}>
        <View style={[styles.pilotTextView, active === '/pilot/acc-details' ? styles.pilotTextActiveView : '']}>
          <Text style={styles.pilotProgressText1}>3</Text>
        </View>
        <Text style={[styles.pilotProgressText2, active === '/pilot/acc-details' ? styles.activeColor : '']}>Account details</Text>
      </View>
    </View>
  );
};

export default PilotProgress;

const styles = StyleSheet.create({
  pilotProgress: {
    padding: 10,
    backgroundColor: "#FAF7FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  pilotProgressView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  pilotTextView: {
    // paddingHorizontal: "auto",
    backgroundColor: "#B5BAC6",
    justifyContent: "center",
    alignItems: "center",
    height: 15,
    width: 15,
    borderRadius: "50%",
  },
  pilotTextActiveView: {
    // paddingHorizontal: "auto",
    backgroundColor: "#3E4C6E",
  },
  pilotProgressText1: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 10,
    color: "#FFFFFF",
  },
  pilotProgressText2: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 24,
    color: "#B5BAC6",
  },
  activeColor: {
    color: '#3E4C6E',
    fontFamily: "Inter_600SemiBold",
    fontWeight: 600,
  },
});
