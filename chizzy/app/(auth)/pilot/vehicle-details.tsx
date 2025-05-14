import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import PilotProgress from "@/components/pilot/pilot-progress";
import { usePathname, useRouter } from "expo-router";
import { CustomInput, CustomPhoneInput } from "@/components/utils";
import { Btn } from "@/components/btn";
import Select, { SelectOption } from "@/components/select";

type Props = {};

const { width } = Dimensions.get("window");

const VehicleDetails = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [selectedCon, setSelectedCon] = useState<string | undefined>(undefined);
  const optionsConnditon: SelectOption[] = [
    {
      id: "1",
      label: "Condition 1",
      to: "Car body is okay, AC and sound system are working fine",
      value: "Condition 1",
    },
    {
      id: "2",
      label: "Condition 2",
      to: "Car body is okay, AC is working fine but sound system is faulty",
      value: "Condition 2",
    },
    {
      id: "3",
      label: "Condition 3",
      to: "Car body is not okay and AC is working fine",
      value: "Condition 3",
    },
  ];
  const options: SelectOption[] = [
    {
      id: "1",
      label: "Sedan",
      value: "Sedan",
    },
    {
      id: "2",
      label: "Bus",
      value: "Bus",
    },
    {
      id: "3",
      label: "Mini-Bus",
      value: "Mini-Bus",
    },
  ];

  const clickNext = () => {
    router.push("/pilot/acc-details");
  };
  const clickPrev = () => {
    router.push("/pilot/pilot");
  };
  return (
    <SafeAreaView style={styles.pilotCont}>
      <View style={styles.rideHead}>
        <GoBack />
        <Text style={styles.rideHeadText}>Continue as pilot</Text>
      </View>
      <PilotProgress route={pathname} />
        {/* <ScrollView> */}
      <View style={styles.pilotFormCont}>
        <Text style={styles.passFormHeadText}>Vehicle details</Text>
        <Text style={styles.passFormDescText}>
          Kindly enter your car details below
        </Text>
          <View style={styles.inputCont}>
            <CustomInput
              placeholder="Kindly enter the make of your vehicle"
              label="Make"
            />
            <CustomInput
              placeholder="Kindly enter the model of your vehicle"
              label="Model"
            />
            <CustomInput
              placeholder="Kindly enter vehicle plate number"
              label="Plate number"
            />
            <Select
              placeholder="Select vehicle condition"
              options={optionsConnditon}
              selectedValue={selectedCon}
              onValueChange={setSelectedCon}
              label="Vehicle Condition"
            />
            <Select
              placeholder="Select vehicle type"
              options={options}
              selectedValue={selected}
              onValueChange={setSelected}
              label="Vehicle Type"
            />
            <CustomInput
              placeholder="Kindly enter vehicle color"
              label="Vehicle color"
            />
          </View>

        <View style={styles.btnCont}>
          <Btn text="Prev" btnWidth onPress={clickPrev} />
          <Btn text="Next" btnWidth onPress={clickNext} />
        </View>
      </View>
        {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({
  pilotCont: {
    // padding: 10,
    height: '100%',
  },
  rideHead: {
    flexDirection: "row",
    gap: width / 5,
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: 'red',
    paddingVertical: 10,
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
  pilotFormCont: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: "85%",
    // borderWidth: 2,
    // borderColor: 'red',
  },
  passFormHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    color: "#181619",
  },
  passFormDescText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#181619",
    paddingTop: 10,
  },
  inputCont: {
    paddingVertical: 20,
    gap: 15,
  },
  btnCont: {
    flexDirection: "row",
    marginTop: "auto",
    gap: 20,
    justifyContent: "center",
  },
});
