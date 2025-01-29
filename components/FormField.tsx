import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import tw from "twrnc";

interface FormProps {
  title: string;

  handleChangeText: (text: string) => void;
  keyboardType?: string;
  value: string;
  placeholder?: string;
}

const FormField = ({
  title,
  handleChangeText,
  keyboardType,
  value,
  placeholder,
  ...props
}: FormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={tw`my-4`}>
      <Text style={tw`text-base text-gray-100 font-semibold`}>{title}</Text>

      <View
        style={tw`w-full h-16 mt-2 px-4 bg-gray-400 rounded-2xl border-0  flex flex-row items-center`}
      >
        <TextInput
          style={tw`flex-1 text-black font-semibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={tw`w-6 h-6`}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
