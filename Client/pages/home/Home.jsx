import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";

const Home = () => {
  return (
    <View>
      <SearchBar />
    </View>

  );
};

const styles = StyleSheet.create({
  nav: {
    bottom: 0,
    alignContent: "center",
  },
});

export default Home;
