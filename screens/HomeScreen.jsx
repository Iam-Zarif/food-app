import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import Categories from "../components/Categories";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white pt-3 pb-3">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 ">
        <View className="flex-row flex-1 items-center p-3 h-12 rounded-full border border-gray-300">
          <Icon.Search height="15" width="25" stroke="gray"></Icon.Search>
          <TextInput
            placeholder="Search here"
            className="ml-1 flex-1 text-xs"
          ></TextInput>
          <View className="flex-row items-center space-x-1 border-0 border-l-[1px] pl-2 border-l-gray-400">
            <Icon.MapPin height="20" width="20" stroke="gray"></Icon.MapPin>
            <Text className="text-gray-500 text-xs">New York, NYC</Text>
          </View>
        </View>
        <View
          className=" p-2 rounded-full "
          style={{ backgroundColor: themeColors.bgColor(5) }}
        >
          <Icon.Sliders
            height="14"
            width="14"
            stroke="white"
            strokeWidth="2.5"
          ></Icon.Sliders>
        </View>
      </View>
      {/* Main content area */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
