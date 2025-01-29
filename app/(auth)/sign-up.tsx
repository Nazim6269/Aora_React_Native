import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image } from "react-native";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import tw from "twrnc";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

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

          <Text style={tw`text-2xl font-semibold text-white mt-10`}>
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />

          <FormField
            title="Email"
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
            title="Sign Up"
            handlePress={handlePress}
            isLoading={isSubmitting}
          />

          <View style={tw`flex justify-center pt-5 flex-row gap-2`}>
            <Text style={tw`text-lg text-gray-100 font-regular`}>
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              style={tw`text-lg font-semibold text-orange-400`}
            >
              Login
            </Link>
            <Link
              href="/home"
              style={tw`text-lg font-semibold text-orange-400`}
            >
              Home
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
