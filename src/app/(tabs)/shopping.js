import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const ShoppingScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
      {/* <Text>ShoppingScreen</Text> */}
      <WebView source={{ uri: "https://store.kakao.com/" }} style={{ flex: 1 }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShoppingScreen;
