import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import tw from "twrnc";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setSubmitting] = useState(false);
  const handlePress = () => {};
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
          <FormField
            title={"Email"}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />

          <CustomButton
            title="Sign In"
            handlePress={handlePress}
            isLoading={isSubmitting}
          />

          <View style={tw`flex justify-center pt-5 flex-row gap-2`}>
            <Text style={tw`text-lg text-gray-100 font-pregular`}>
              Don't have an account?
            </Text>
            <Link href="/sign-up" style={tw`text-lg font-bold text-orange-400`}>
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
