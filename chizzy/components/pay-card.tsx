import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CustomInput } from "./utils";
import { Btn } from "./btn";
import Select, { SelectOption } from "./select";
import { useRouter } from "expo-router";
import { useToken } from "@/app/context/context";
import { AxiosAuthGet } from "@/app/api/axios";

type Props = {
  onPress: () => void;
};

const PayCard = ({ onPress }: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const getPaymentOptionsUrl = "payopt/GetActivePaymentOptions";
  const { token } = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [payOptions, setPayOptions] = useState([]);
  const options: SelectOption[] = [
    {
      id: "1",
      label: "Paystack",
      value: "Paystack",
    },
  ];

  const getPayOpts = async () => {
    setIsLoading(true);
    try {
      const res = await AxiosAuthGet(getPaymentOptionsUrl, token);
      console.log(res);
      const modified = res.map((item: any) => ({
        ...item,
        label: "..", // add or overwrite label
      }));
      setPayOptions(modified);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getPayOpts();
  }, []);

  return (
    <View style={styles.payCardCont}>
      <TouchableOpacity
        style={styles.homeInd}
        onPress={onPress}
      ></TouchableOpacity>
      <View style={styles.payCardTextView}>
        <Text style={styles.payCardHeadText}>Wallet top up</Text>
        <Text style={styles.payCardBodyText}>
          Input the amount you want to top up and select a payment gateway
        </Text>
      </View>
      <View style={styles.payCardInput}>
        <CustomInput
          label="Top up amount"
          placeholder="₦ Input amount"
          type="numeric"
        />
        <Select
          placeholder="Select payment gateway"
          options={options}
          selectedValue={selected}
          onValueChange={setSelected}
          isClick
          isLabel={false}
        />
      </View>
      <View style={styles.payCardBtn}>
        <Btn
          text="Continue payment"
          onPress={() => router.push("/(tabs)/wallet/payment-receipt")}
        />
      </View>
    </View>
  );
};

export default PayCard;

const styles = StyleSheet.create({
  homeInd: {
    width: 134,
    height: 5,
    backgroundColor: "#18181B",
    borderRadius: 100,
    marginTop: 15,
    marginHorizontal: "auto",
  },
  payCardCont: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 433,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 4,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  payCardTextView: {
    gap: 10,
    paddingTop: 25,
  },
  payCardHeadText: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 32,
    color: "#3E4C6E",
  },
  payCardBodyText: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#8890A4",
  },
  payCardInput: {
    paddingTop: 30,
    gap: 8,
  },
  payCardBtn: {
    marginTop: "auto",
  },
});
