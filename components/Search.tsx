import { useState } from "react";
import { usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import tw from "twrnc";
import { icons } from "../constants";

const SearchInput = ({ initialQuery }: { initialQuery?: string }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View
      style={tw`flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-orange-400`}
    >
      <TextInput
        style={tw`text-base mt-0.5 text-white flex-1 font-regular`}
        value={query}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity onPress={() => {}}>
        <Image source={icons.search} style={tw`w-5 h-5`} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
