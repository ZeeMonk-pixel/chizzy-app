import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Btn } from "@/components/btn";
import Select, { SelectOption } from "@/components/select";
import { useRouter } from "expo-router";

type Props = {};

const { width } = Dimensions.get("window");

const Home = (props: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [selectedDes, setSelectedDes] = useState<string | undefined>(undefined);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const optionsPickup: SelectOption[] = [
    {
      id: "1",
      from: "Oshodi Bus Stop",
      to: "to CMS Bus stop",
      value: "Oshodi Bus Stop",
    },
    { id: "2", from: "Mile 2", to: "to Berger Bus stop", value: "Mile 2" },
    {
      id: "3",
      from: "Ojota Bus stop",
      to: "to Yaba Bus stop",
      value: "Ojota Bus stop",
    },
    {
      id: "4",
      from: "Oshodi Bus Stop",
      to: "to CMS Bus stop",
      value: "Oshodi Bus Stop",
    },
    { id: "5", from: "Mile 2", to: "to Berger Bus stop", value: "Mile 2" },
    {
      id: "6",
      from: "Ojota Bus stop",
      to: "to Yaba Bus stop",
      value: "Ojota Bus stop",
    },
  ];
  const optionsDestination: SelectOption[] = [
    {
      id: "1",
      to: "from Oshodi Bus Stop",
      from: "CMS Bus stop",
      value: "CMS Bus stop",
    },
    {
      id: "2",
      to: "from Mile 2",
      from: "Berger Bus stop",
      value: "Berger Bus stop",
    },
    {
      id: "3",
      to: "from Ojota Bus stop",
      from: "Yaba Bus stop",
      value: "Yaba Bus stop",
    },
    {
      id: "4",
      to: "from Oshodi Bus Stop",
      from: "CMS Bus stop",
      value: "CMS Bus stop",
    },
    {
      id: "5",
      to: "from Mile 2",
      from: "Berger Bus stop",
      value: "Berger Bus stop",
    },
    {
      id: "6",
      to: "to Ojota Bus stop",
      from: "Yaba Bus stop",
      value: "Yaba Bus stop",
    },
  ];

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.home}>
        <ImageBackground
          source={require("../../../assets/images/homebg.png")} // or use a URL
          style={styles.background}
          resizeMode="cover" // or 'contain', 'stretch', etc.
        >
          <View style={styles.homeHeader}>
            <Text style={styles.headText}>Hello Ubong</Text>
            <View style={styles.walletView}>
              <Text style={styles.walletHead}>WALLET BALANCE</Text>
              <Text style={styles.walletCash}>₦45,000</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.moveCard}>
          <Text style={styles.moveText}>How would you be moving today?</Text>
          <View style={styles.cardSelect}>
            {selected && selectedDes && (
              <Image
                style={styles.selectImg}
                source={require("../../../assets/images/activeSelect.png")}
              />
            )}
            {!selected ||
              (!selectedDes && (
                <Image
                  style={styles.selectImg}
                  source={require("../../../assets/images/inActiveSelect.png")}
                />
              ))}
            {!selected && !selectedDes && (
              <Image
                style={styles.selectImg}
                source={require("../../../assets/images/inActiveSelect.png")}
              />
            )}
            <Select
              placeholder="Pick up bus-stop"
              options={optionsPickup}
              selectedValue={selected}
              onValueChange={setSelected}
            />
            <Select
              placeholder="Destination bus-stop"
              options={optionsDestination}
              selectedValue={selectedDes}
              onValueChange={setSelectedDes}
            />
          </View>
          <View style={styles.seatChoiceCont}>
            <Text style={styles.seatHeadText}>
              How many seats will you like to book?
            </Text>
            <View style={styles.seatChoice}>
              <TouchableOpacity style={styles.imgBg} onPress={decrement}>
                <Image source={require("../../../assets/images/remove.png")} />
              </TouchableOpacity>
              <Text style={styles.seatChoicetext}>{count}</Text>
              <TouchableOpacity style={styles.imgBg} onPress={increment}>
                <Image source={require("../../../assets/images/add.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btnCont}>
          <Btn
            text="Search for available rides"
            iconName="search"
            iconSize={24}
            iconColor="white"
            disabled={selected && selectedDes && count > 0 ? false : true}
            onPress={() => router.push("/(tabs)/home/available-riders")}
          />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: "white",
    height: "100%",
    position: "relative",
    paddingBottom: 15,
  },
  background: {
    width: "100%",
    height: 503,
  },
  homeHeader: {
    // borderColor: "black",
    // borderWidth: 2,
    marginTop: 100,
    alignItems: "center",
    gap: 30,
  },
  headText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  walletView: {
    alignItems: "center",
  },
  walletHead: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 24,
    textTransform: "uppercase",
    color: "#FFFFFF",
    opacity: 0.7,
  },
  walletCash: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 36,
    color: "#FFFFFF",
  },
  moveCard: {
    position: "absolute",
    width: width - 70,
    height: 322,
    left: 35,
    top: 280,
    padding: 15,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.03)",
    borderRadius: 20,
  },
  cardSelect: {
    position: "relative",
  },
  selectImg: {
    position: "absolute",
    top: 25,
  },
  moveText: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24,
    color: "#B5BAC6",
    textAlign: "center",
  },
  btnCont: {
    width: "80%",
    marginHorizontal: "auto",
    marginTop: "auto",
  },
  seatChoiceCont: {
    paddingHorizontal: 5,
    gap: 15,
    paddingVertical: 10,
  },
  seatHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#3E4C6E",
    textAlign: "center",
  },
  seatChoice: {
    height: 54,
    backgroundColor: "#F4F7F9",
    borderRadius: 27,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  seatChoicetext: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#3E4C6E",
  },
  imgBg: {
    width: 46,
    height: 46,
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
