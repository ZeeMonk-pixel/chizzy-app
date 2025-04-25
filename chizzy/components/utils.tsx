import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    label?: string
    placeholder?: string;
}
type CustomCheckProps = {
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
const { width } = Dimensions.get("window");

export const CustomInput = ({label, placeholder}: Props) => {
  return (
    <View style={styles.inputCont}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#E0DBD5"
      />
    </View>
  )
}
export const CustomPhoneInput = ({label, placeholder}: Props) => {
  return (
    <View style={styles.inputPhoneCont}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.phoneInput}>
      <Text style={{fontSize: 16, color: "#E0DBD5"}}>🇳🇬 +234</Text>
      <TextInput
        style={styles.inputPhone}
        placeholder={placeholder}
        maxLength={10}
        keyboardType="numeric"
        placeholderTextColor="#E0DBD5"
      />
      </View>
    </View>
  )
}
export const Overlay = (props: Props) => {
  return (
    <View style={styles.overlay}></View>
  )
}

export const CustomCheckbox = ({checked, setChecked}: CustomCheckProps) => {
  return (
    <Pressable onPress={() => setChecked(!checked)} style={styles.checkboxContainer}>
      <Ionicons
        name={checked ? 'checkbox' : 'square-outline'}
        size={24}
        color={checked ? '#8441F1' : '#D0D0D0'} 
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
    inputCont: {
        position: "relative",
        width: "100%"
    },
    label: {
        fontFamily: 'Inter_600SemiBold',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 16,
        color: '#7D7D7D',
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        position: 'absolute',
        top: -10,
        left: 8,
        // borderColor: "red",
        // borderWidth: 2,
        zIndex: 2
    },
    input: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        gap: 8,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 8,
        fontFamily: 'Inter_500Medium',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        color: '#8441F1',
        width: "100%"
    },
    inputPhoneCont: {
        position: 'relative',
        paddingVertical: 6,
        paddingHorizontal: 24,
        gap: 8,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 8,
        width: "100%"
    },
    phoneInput: {
        flexDirection: 'row',
        alignItems: "center"
    },
    inputPhone: {
        fontFamily: 'Inter_500Medium',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 24,
        color: '#8441F1',
        // paddingVertical: 16,
        paddingHorizontal: 10,
        width: "100%"
    },
    overlay: {
        height: "120%",
        width: width,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 3
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      padding: 5,
    },
})