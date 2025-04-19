import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

type Props = {}

const NotiBadge = (props: Props) => {

    const router = useRouter();

    const clickAllow = () => {
        router.push("/(auth)/complete-account");
    }

  return (
    <View style={styles.notiBadge}>
      <Text style={styles.notiHeadText}>Would Like to Send You Notifications</Text>
      <Text style={styles.notiBtmText}>Notifications may include alerts, sounds and icon badges. These can be configured in Settings.</Text>
      <View style={styles.notiBtnCont}>
        <TouchableOpacity style={styles.notiBtn}>
            <Text style={styles.notiBtnText} onPress={() => router.push("/(auth)/complete-account")}>Don't Allow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.notiBtn, {borderRightWidth: 0} ]} onPress={clickAllow}>
            <Text style={styles.notiBtnText}>Allow</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NotiBadge

const styles = StyleSheet.create({
    notiBadge: {
        position: 'absolute',
        zIndex: 4,
        top: "45%",
        left: "15%",
        // padding: 20,
        width: "80%",
        backgroundColor: "white",
        backdropFilter: "blur(27.1828px)",
        borderRadius: 14,
    },
    notiHeadText: {
        fontFamily: 'Inter_600SemiBold',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: -0.408,
        color: "#000000",
        paddingTop: 20
    },
    notiBtmText: {
        fontFamily: 'Inter_400Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
        lineHeight: 16,
        textAlign: "center",
        letterSpacing: -0.078,
        color: "#000000",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    notiBtnCont: {
        flexDirection: "row",
        width: "100%",
        // borderColor: "red",
        // borderWidth: 2
    },
    notiBtn: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderTopColor: "#3C3C435C",
        borderRightColor: "#3C3C435C",
        width: "50%",
        paddingVertical: 10
    },
    notiBtnText: {
        fontFamily: 'Inter_600SemiBold',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: -0.408,
        color: "#007AFF",
    }
})