import { SafeAreaView, StyleSheet, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import SliderItem from '@/components/slider-item';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { useNotification } from '@/context/NotificationContext';
import { useRouter } from 'expo-router';
import { fetchSecurely } from '@/utils/storage';
import { useToken } from './context/context';

const Index = () => {
   const { notification, expoPushToken, error } = useNotification();
   const router = useRouter();
   const { token, setToken } = useToken()
   const [isLoading, setIsLoading] = useState(false);

  if (error) {
    console.log(error);
    // router.push('/(auth)/testnot')
    
    // return <Text>Error: {error.message}</Text>;
  }

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: "103868150846-vqphsrlnupdh19c8en6rhtdcdvp3o5g5.apps.googleusercontent.com",
      webClientId: "103868150846-f0c7cp5q5g53lh2de7dnvradik86osa7.apps.googleusercontent.com",
      profileImageSize: 150
    })
  }, []);

  const getAuthToken = async() => {
    setIsLoading(true);
    try {
      const userData = await fetchSecurely('userAppData');
      setToken(userData?.token);
      setIsLoading(false);
      
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
      throw error;
    }

  }

  useEffect(() => {
    getAuthToken();

  }, []);
  

  useEffect(() => {
    if (token != null){
      router.replace("/(tabs)/home");
      // console.log('token is valid');
    } else {
      // console.log('token is null');
    }
  }, [token]);


  return ( 
    <SafeAreaView>
      <SliderItem />
      {/* <Text> {expoPushToken}</Text>
      <Text> {notification?.request.content.title}</Text>
      <Text> {JSON.stringify(notification?.request.content.data, null, 2)}</Text> */}
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({})
