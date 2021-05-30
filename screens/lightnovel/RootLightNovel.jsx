import { Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LightNovel from ".";
import ViewLightNovel from "./ViewLightNovel";
import DetailLightNovel from "./DetailLightNovel";
function RootLightNovel() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        screenOptions={{ headerShown: false }}
        name="ListPost"
        component={LightNovel}
        options={{ title: "Trang chủ" }}
      />
      <Stack.Screen
        name="ViewLightNovel"
        component={ViewLightNovel}
        options={{ title: "Xem chi tiết" }}
      />
      <Stack.Screen
        name="DetailLightNovel"
        component={DetailLightNovel}
        options={{ title: "Đọc truyện" }}
      />
    </Stack.Navigator>
  );
}

export default RootLightNovel;
