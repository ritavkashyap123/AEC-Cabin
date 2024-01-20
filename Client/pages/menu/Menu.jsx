import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Card from "../../components/card/Card";
import Data from "../../components/data/Data";

export default function Menu() {
  const { chowmin, friedRice, mainCourse } = Data();

  return (
    <View>
      <SearchBar />
      <ScrollView style={styles.main}>
        <Text>Menu</Text>
        <View style={styles.menu}>
          {chowmin.map((chow, index) => (
            <View key={index}>
              <Card name={chow.name} price={chow.price} />
            </View>
          ))}
        </View>
        <Text>Menu</Text>
        <View style={styles.menu}>
          {friedRice.map((rice, index) => (
            <View key={index}>
              <Card name={rice.name} price={rice.price} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginBottom: 75
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
StyleSheet;
