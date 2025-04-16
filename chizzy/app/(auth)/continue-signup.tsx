import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BtnTrans } from '@/components/btn'

type Props = {}

const ContinueSignup = (props: Props) => {
  return (
    <SafeAreaView style={styles.continueCont}>
      <Text style={styles.continueText}>How would you like to continue?</Text>
      <View style={styles.btnCont}>
        <BtnTrans text='Continue as a Passenger' />
        <BtnTrans text='Continue as a Pilot' />
      </View>
    </SafeAreaView>
  )
}

export default ContinueSignup

const styles = StyleSheet.create({
    continueCont: {
        paddingVertical: 50,
        paddingLeft: 30,
        // alignItems: "center"
    },
    continueText: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 32,
        alignItems: "center",
        textAlign: "left",
        color: "#181619",
    },
    btnCont: {
        paddingVertical: 50,
        gap: 20
    }
})