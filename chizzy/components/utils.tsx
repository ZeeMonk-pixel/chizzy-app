import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type Props = {
    label?: string
    placeholder?: string
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
})