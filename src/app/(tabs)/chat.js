import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ChatScren = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
      <Text>ChatScreen</Text>
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

export default ChatScren;
