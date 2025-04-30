import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};
export type EachHist = {
  id: string;
  method: string;
  status: string;
  amount: string;
  date: string;
};

const PaymentCard = ({ method, status, amount, date, id }: EachHist) => {
  return (
    <View style={styles.payHistCont}>
      <View style={styles.payHistBlock}>
        <Text style={styles.payHistMethod}>{method}</Text>
        <Text style={[styles.payHistStat, {color: status === 'Successful' ? '#76D31A' : status === 'Failed' ? '#D71212' : status === 'Pending' ? '#EE9B1F' : ''}]}>{status}</Text>
      </View>
      <View style={styles.payHistBlock}>
        <Text style={styles.payHistMethod}>{amount}</Text>
        <Text style={styles.payHistDate}>{date}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  payHistCont: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  payHistBlock: {
    gap: 10
  },
  payHistMethod: {
    fontFamily: 'Inter_600SemiBold',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
  },
  payHistStat: {
    fontFamily: 'Inter_400Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  payHistDate: {
    fontFamily: 'Inter_400Regular',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: '#B5BAC6',
  },
});
