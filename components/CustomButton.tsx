import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/assets/colors/Colors";

interface ButtonProps {
  title: string;
  textStyle?: object;
  containerStyle?: object;
  handlePress?: () => void;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  textStyle,
  containerStyle,
  handlePress,
  isLoading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      onPress={handlePress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: `${Colors.secondary[200]}`,
    minHeight: 62,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  text: {
    color: `${Colors.primary}`,
    fontSize: 16,
    fontWeight: "bold",
  },
});
