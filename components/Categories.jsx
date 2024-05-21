import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { categoris } from "../constants/api";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{ marginTop: 16 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        {categoris.map((category, key) => {
          let isActive = category.id == activeCategory;

          return (
            <View
              key={key}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category?.id)}
                style={[
                  styles.button,
                  isActive ? styles.activeButton : styles.inactiveButton,
                ]}
              >
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{ height: 24, width: 24 }}
                    source={category.image}
                  />
                  <Text style={[styles.text, isActive && styles.activeText]}>
                    {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  activeButton: {
    backgroundColor: "#4a5568",
    
  },
  inactiveButton: {
    backgroundColor: "#f7fafc", // bg-gray-100
  },
  text: {
    fontSize: 12,
    color: "#000000", // default text color
  },
  activeText: {
    color: "#ffffff", // text-white
  },
});
