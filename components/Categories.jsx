import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoris } from "../constants/api";

export default function Categories() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        {categoris.map((category, key) => {
          return (
            <View key={key} className="flex justify-center items-center mr-4">
              <TouchableOpacity className="px-4 py-1.5 rounded-full shadow bg-gray-200">
                <View className="flex-col items-center">
                  <Image className="h-10 w-10" source={category.image}></Image>
                  <Text className="text-xs">{category.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
