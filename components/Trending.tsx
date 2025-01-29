import { FlatList, Text } from "react-native";
import React from "react";
import tw from "twrnc";

interface Post {
  id: string;
}

const Trending = ({ posts }: { posts: Post[] }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={tw`text-white w-20`}>{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
