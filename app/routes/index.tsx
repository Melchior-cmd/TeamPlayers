import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { theme } from "@/theme";
import { useTheme } from "styled-components/native";

export default function App() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationIndependentTree>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </NavigationIndependentTree>
    </View>
  );
}
