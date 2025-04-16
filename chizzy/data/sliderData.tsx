import { ImageSourcePropType } from 'react-native'

export type ImageSliderProps = {
    title: string,
    image: ImageSourcePropType,
    text: string
}

export const ImageSlider = [
    {
        title: "Request a ride in seconds.",
        image: require("@/assets/images/img.png"),
        text: "With Chizzy Rides, you can request a ride in just a few seconds. Simply enter your pickup and drop-off locations, and we'll find a driver for you."
    },
    {
        title: "Get a ride at a fair price.",
        image: require("@/assets/images/img.png"),
        text: "Chizzy Rides is committed to providing you with a fair price for your ride. We'll show you the estimated price before you request a ride, so you know exactly what you're paying."
    },
    {
        title: "Ride with peace of mind.",
        image: require("@/assets/images/img.png"),
        text: "Chizzy Rides is committed to your safety. All of our drivers are background checked and insured, and we offer 24/7 customer support."
    },
]

