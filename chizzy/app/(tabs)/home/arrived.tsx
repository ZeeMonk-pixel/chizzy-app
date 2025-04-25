import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "@/components/go-back";
import { RoundAccordion } from "@/components/accordion";
import * as Clipboard from "expo-clipboard";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CopyAlert } from "@/components/alert";
import { Btn } from "@/components/btn";
import { useRouter } from "expo-router";

type Props = {};
type ImageItem = {
  id: string;
  source: ImageSourcePropType;
  source2?: ImageSourcePropType;
};

const { width } = Dimensions.get("window");

const Arrived = (props: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [starIndex, setStarIndex] = useState<number>(-1);

  const handleCopy = async (textToCopy: string) => {
    await Clipboard.setStringAsync(textToCopy);
    setIsCopied(true);
  };

  const clickStar = (index: number) => {
    setStarIndex(index);
  };

  const router = useRouter();

  const stars: ImageItem[] = [
    {
      id: "1",
      source: require("../../../assets/images/transStar.png"),
      source2: require("../../../assets/images/star.png"),
    },
    {
      id: "2",
      source: require("../../../assets/images/transStar.png"),
      source2: require("../../../assets/images/star.png"),
    },
    {
      id: "3",
      source: require("../../../assets/images/transStar.png"),
      source2: require("../../../assets/images/star.png"),
    },
    {
      id: "4",
      source: require("../../../assets/images/transStar.png"),
      source2: require("../../../assets/images/star.png"),
    },
    {
      id: "5",
      source: require("../../../assets/images/transStar.png"),
      source2: require("../../../assets/images/star.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.rideCont}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rideHead}>
          <GoBack />
          <Text style={styles.rideHeadText}>You’ve arrived</Text>
        </View>
        <View style={styles.accordionCont}>
          <RoundAccordion text="Make sure your belongings are not left behind" />
        </View>
        <View style={styles.driverProf}>
          <View style={styles.driverProfImg}>
            <Image source={require("../../../assets/images/bigMiniBus.png")} />
            <Image
              style={styles.profImg}
              source={require("../../../assets/images/profile.png")}
            />
          </View>
          <View style={styles.driverProfText}>
            <Text style={styles.driverProfName}>Kolade Ahmed</Text>
            <Text style={styles.driverProfCar}>Sienna . EDY-128-GF</Text>
          </View>
        </View>
        <View style={styles.tripCompleted}>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Trip completed</Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
                position: "relative",
              }}
              onPress={() => handleCopy("Chizzy#3749327278266281")}
            >
              <Text style={styles.tripText2}>Chizzy#3749327278266281</Text>
              <Ionicons name={"copy"} size={10} color={"#8441F1"} />
              {isCopied && (
                <CopyAlert
                  text="Copied!"
                  isShow={isCopied}
                  setIsShow={setIsCopied}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Date</Text>
            <Text style={styles.tripText2}>Monday-22-May-2023</Text>
          </View>
        </View>
        <View style={styles.tripRating}>
          <Text style={styles.driverProfName}>How was your trip?</Text>
          <Text style={styles.driverProfCar}>
            Give 1 to 5 stars about your trip
          </Text>
          <View style={styles.starCont}>
            <FlatList
              data={stars}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => clickStar(index)}>
                  <Image
                    source={index <= starIndex ? item.source2 : item.source}
                    style={styles.image}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.tripDetails}>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Pick-up bus stop</Text>
            <Text style={styles.tripText2}>CMS Bus stop</Text>
          </View>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Destination bus stop</Text>
            <Text style={styles.tripText2}>Obalende Bus stop</Text>
          </View>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Check in time</Text>
            <Text style={styles.tripText2}>3:12PM</Text>
          </View>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Check out time</Text>
            <Text style={styles.tripText2}>4:02PM</Text>
          </View>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Trip cost</Text>
            <Text style={styles.tripText2}>₦5,000</Text>
          </View>
          <View style={styles.tripView}>
            <Text style={styles.tripText}>Payment method</Text>
            <Text style={styles.tripText2}>My wallet</Text>
          </View>
        </View>
        <View style={styles.btnCont}>
          <Btn text="Go to home" onPress={() => router.push("/(tabs)/home")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Arrived;

const styles = StyleSheet.create({
  rideCont: {
    padding: 10,
  },
  rideHead: {
    flexDirection: "row",
    gap: width / 5,
    alignItems: "center",
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
  accordionCont: {
    flexDirection: "row",
    justifyContent: "center",
  },
  driverProf: {
    paddingVertical: 25,
    alignItems: "center",
  },
  driverProfImg: {
    position: "relative",
    alignItems: "center",
  },
  profImg: {
    width: 63,
    height: 63,
    position: "absolute",
    top: 30,
    left: 60,
  },
  driverProfText: {
    alignItems: "center",
    // gap: 5,
    marginTop: 15,
  },
  driverProfName: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: "#566280",
  },
  driverProfCar: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 24,
    color: "#202530",
  },
  tripCompleted: {
    marginHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2CC",
  },
  tripView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  tripText: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 24,
    color: "#7D7D7D",
  },
  tripText2: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 24,
    color: "#566280",
  },
  tripRating: {
    marginHorizontal: 30,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2CC",
    alignItems: "center",
  },
  starCont: {
    width: "auto",
    height: 36,
    justifyContent: "center",
    gap: 5,
    marginTop: 10,
  },
  image: {
    width: 36,
    height: 36,
    marginHorizontal: 5,
  },
  tripDetails: {
    marginHorizontal: 30,
    paddingVertical: 20,
  },
  btnCont: {
    marginHorizontal: 30,
    paddingVertical: 5
  }
});
