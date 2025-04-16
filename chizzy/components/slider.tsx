import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageSlider, ImageSliderProps } from "@/data/sliderData";
import SliderItem from "./slider-item";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"

type Props = {
    itemList: ImageSliderProps[]
};

const Slider = ({itemList}: Props) => {

  return (
    <View>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
