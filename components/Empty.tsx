import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import tw from "twrnc";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const Empty = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <View style={tw`flex justify-center items-center px-4`}>
      <Image
        source={images.empty}
        resizeMode="contain"
        style={tw`w-[270px] h-[216px]`}
      />

      <Text style={tw`text-sm font-pmedium text-gray-100`}>{title}</Text>
      <Text style={tw`text-xl text-center font-psemibold text-white mt-2`}>
        {subtitle}
      </Text>

      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/home")}
        containerStyle={{ width: "full" }}
      />
    </View>
  );
};

export default Empty;
