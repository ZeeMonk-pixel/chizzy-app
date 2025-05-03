// components/Select.tsx
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export type SelectOption = {
  id: string;
  from?: string;
  to?: string;
  label?: string;
  value: string;
};
type SingleItemProps = {
  item: SelectOption;
};

type SelectProps = {
  options: SelectOption[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  isLabel?: boolean;
  iconName?: string;
};

export default function Select({
  options,
  selectedValue,
  onValueChange,
  placeholder,
  isLabel,
  iconName,
}: SelectProps) {
  const [visible, setVisible] = useState(false);

  const clickMenu = () => setVisible(!visible);

  const handleSelect = (value: string) => {
    onValueChange(value);
    clickMenu();
  };

  const SingleItem = ({ item }: SingleItemProps) => {
    return (
      <TouchableOpacity
        style={styles.selectOptions}
        onPress={() => handleSelect(item?.value)}
      >
        {item?.from && (
          <Text style={styles.selectOptionsFrom}>{item?.from}</Text>
        )}
        {item?.label && (
          <Text style={styles.selectOptionsFrom}>{item?.label}</Text>
        )}
        {item?.to && <Text style={styles.selectOptionsTo}>{item?.to}</Text>}
      </TouchableOpacity>
    );
  };
  const hasLabel = options.some((item) => !!item.label);

  return (
    <View style={styles.container}>
      {isLabel && (
        <TouchableOpacity
          style={[styles.placeholderCont, isLabel && styles.isLabelCont]}
          onPress={clickMenu}
        >
          <View style={{ gap: 20, flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name={iconName as keyof typeof MaterialCommunityIcons.glyphMap}
              size={24}
              color={"#D0D0D0"}
            />
            <Text
              style={[styles.placeholder, hasLabel && styles.labelPlaceholder]}
            >
              {!selectedValue ? placeholder : selectedValue}
            </Text>
          </View>

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
              color="#D0D0D0"
            />
          )}
        </TouchableOpacity>
      )}
      {!isLabel && (
        <TouchableOpacity
          style={[
            styles.placeholderCont,
            hasLabel && styles.labelPlaceHolderCont,
          ]}
          onPress={clickMenu}
        >
          <Text
            style={[styles.placeholder, hasLabel && styles.labelPlaceholder]}
          >
            {!selectedValue ? placeholder : selectedValue}
          </Text>
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
      )}
      {visible && (
        <View style={[styles.optionsView, hasLabel && styles.labelOptionsView]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={options}
            renderItem={({ item }) => <SingleItem item={item} />}
            keyExtractor={(item) => item?.id}
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
  labelPlaceHolderCont: {
    width: "100%",
    borderColor: "#E1E1E1",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  isLabelCont: {
    width: "100%",
    borderColor: "#E1E1E1",
    borderBottomColor: "#F2F2F2CC",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
  labelPlaceholder: {
    fontFamily: "Inter_400Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    color: "#D0D0D0",
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
  labelOptionsView: {
    height: "auto",
    width: "80%",
  },
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
