import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
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
        <Text style={styles.head}>Chowmin</Text>
        <View style={styles.menu}>
          {chowmin.map((chow, index) => (
            <View key={index}>
              <Card name={chow.name} priceNot={chow.priceNot} price={chow.price} image={chow.image}/>
            </View>
          ))}
        </View>
        <Text style={styles.head}>Fried Rice</Text>
        <View style={styles.menu}>
          {friedRice.map((rice, index) => (
            <View key={index}>
              <Card name={rice.name} priceNot={chow.priceNot} price={rice.price} image={rice.image}/>
            </View>
          ))}
        </View>
        <Text style={styles.head}>Main Course</Text>
        <View style={styles.menu}>
          {mainCourse.map((main, index) => (
            <View key={index}>
              <Card name={main.name} priceNot={chow.priceNot} price={main.price} image={main.image}/>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginBottom: 75,
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    fontSize: 24,
    marginTop: 20,
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
  
});
StyleSheet;
