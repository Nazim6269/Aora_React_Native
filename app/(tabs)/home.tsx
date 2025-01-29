import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { images } from "@/constants";
import Search from "@/components/Search";
import Trending from "@/components/Trending";
import Empty from "@/components/Empty";

const Home = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const handleRefresh = () => {
    setRefreshing(true);
    //fetch sth
    setRefreshing(false);
  };
  return (
    <SafeAreaView style={tw`bg-slate-950 h-full`}>
      <FlatList
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={tw`text-orange-400 h-20`}>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View style={tw`flex my-6 px-4 space-y-6`}>
            <View style={tw`flex justify-between items-start flex-row mb-6`}>
              <View>
                <Text style={tw`font-medium text-sm text-gray-100`}>
                  Welcome Back
                </Text>
                <Text style={tw`text-2xl font-semibold text-white`}>Nazim</Text>
              </View>

              <View style={tw`mt-1.5`}>
                <Image
                  source={images.logoSmall}
                  style={tw`w-9 h-10`}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Search />
            <View style={tw`w-full flex-1 pt-5 pb-8`}>
              <Text style={tw`text-lg font-regular text-gray-100 mb-3`}>
                Latest Videos
              </Text>
              <Trending
                posts={[
                  { id: "1" },
                  { id: "2" },
                  { id: "3" },
                  { id: "4" },
                  { id: "5" },
                  { id: "6" },
                  { id: "7" },
                ]}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty title="No Videos Found" subtitle="No videos created yet" />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
