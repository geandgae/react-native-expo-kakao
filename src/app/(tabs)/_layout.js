import React from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="shopping"
        options={{
          title: "shopping",
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="etc"
        options={{
          title: "etc",
          tabBarIcon: ({ color }) => <Ionicons name="apps" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

