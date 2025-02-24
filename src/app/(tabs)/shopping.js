import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ShoppingScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
      <WebView source={{ uri: "https://store.kakao.com/" }} style={{ flex: 1 }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ShoppingScreen;
