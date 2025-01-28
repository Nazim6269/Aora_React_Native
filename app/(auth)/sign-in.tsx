import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import tw from "twrnc";

const SignIn = () => {
  return (
    <SafeAreaView style={tw`bg-slate-950 h-full`}>
      <ScrollView>
        <View style={tw`w-full flex justify-center h-full px-4 my-6`}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={tw`w-[115px] h-[34px]`}
          />

          <Text
            style={tw`text-2xl font-semibold text-white mt-10 font-psemibold`}
          >
            Log in to Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
