import { SafeAreaView, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import SliderItem from '@/components/slider-item';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

const Index = () => {
  
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: "275445828891-pl1okvsb7993ec0dsm1k99gasaeasttr.apps.googleusercontent.com",
      webClientId: "275445828891-tfpi7bndrru2iq2r6osdd7uqvtg368at.apps.googleusercontent.com",
      profileImageSize: 150
    })
  }, [])

  return (
    <SafeAreaView>
      <SliderItem />
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({})
