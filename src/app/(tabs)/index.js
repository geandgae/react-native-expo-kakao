// import React from "react";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { friendProfiles, myProfile } from "../data";
import Division from "../Division";
import FriendList from "../FriendList";
import FriendSection from "../FriendSection";
import Header from "../Header";
import Margin from "../Margin";
import Profile from "../Profile";

const HomeScreen = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile uri={item.uri} name={item.name} introduction={item.introduction} isMe={false} />
    </View>
  );
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />

      <Margin height={5} />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
      <FlatList
        data={isOpened ? friendProfiles : []}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
      />
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

export default HomeScreen;
