// components/Select.tsx
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type SelectOption = {
  id: string;
  from: string;
  to: string;
  value: string;
};
type SingleItemProps = {
  item: SelectOption;
};

type SelectProps = {
  options: SelectOption[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
  placeholder: string
};

export default function Select({
  options,
  selectedValue,
  onValueChange,
  placeholder
}: SelectProps) {
  const [visible, setVisible] = useState(false);

  const clickMenu = () => setVisible(!visible);

  const handleSelect = (value: string) => {
    onValueChange(value);
    clickMenu();
  };

  const SingleItem = ({ item }: SingleItemProps) => {
    return (
      <TouchableOpacity style={styles.selectOptions} onPress={() => handleSelect(item.value)}>
        <Text style={styles.selectOptionsFrom}>{item.from}</Text>
        <Text style={styles.selectOptionsTo}>{item.to}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.placeholderCont} onPress={clickMenu}>
        <Text style={styles.placeholder}>{!selectedValue ? placeholder : selectedValue}</Text>
        {!visible && (
          <Ionicons
            style={styles.icon}
            name="chevron-down"
            size={24}
            color="#D0D0D0"
          />
        )}
        {visible && (
          <Ionicons
            style={styles.icon}
            name="chevron-up"
            size={24}
            color="#3E4C6E"
          />
        )}
      </TouchableOpacity>
      {visible && (
        <View style={styles.optionsView}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={options}
            renderItem={({ item }) => <SingleItem item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.optionsList}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    alignItems: "flex-end",
    position: "relative",
  },
  placeholderCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    borderBottomColor: "#F2F2F2CC",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  placeholder: {
    fontFamily: "Inter_600SemiBold",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    color: "#3E4C6E",
  },
  icon: {},
  optionsView: {
    position: "absolute",
    width: 275,
    height: 254,
    left: 29,
    top: 37,
    backgroundColor: "#FCFCFC",
    boxShadow: "0px 17px 13px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    zIndex: 3,
    padding: 10,
  },
  optionsList: {
    gap: 40,
  },
  selectOptions: {
    paddingVertical: 5,
    borderBlockColor: "#F2F2F2CC",
    borderBottomWidth: 1,
  },
  selectOptionsFrom: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 24,
    color: "#3E4C6E",
  },
  selectOptionsTo: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 24,
    color: "#3E4C6E",
  },
});
