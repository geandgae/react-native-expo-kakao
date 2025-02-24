import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const ShoppingScreen = () => {
  return <WebView source={{ uri: "https://store.kakao.com/" }} style={{ flex: 1 }} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ShoppingScreen;
