import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const AvailableRiders = (props: Props) => {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Text>AvailableRiders</Text>
    </SafeAreaView>
    </>
  )
}

export default AvailableRiders

const styles = StyleSheet.create({})