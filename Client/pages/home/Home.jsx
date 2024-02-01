import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import Card from "../../components/card/Card";
import Data from "../../components/data/Data";
import { Ionicons } from "@expo/vector-icons";
import CardHot from "../../components/card/CardHot";


export default function Home() {
  const { chowmin, special } = Data();

  return (
    <View>
      <SearchBar />
      <ScrollView style={styles.main}>
        {/* <Text style={styles.head}>Today's Special Offer</Text> */}
        <View style={styles.menu}>
          {special.map((special, index) => (
            <View key={index}>
              <CardHot head1={special.head1} price={special.price} head2={special.head2} image={special.image} />
            </View>
          ))}
        </View>
        <Text style={styles.head1}>Hot Deals <Ionicons name="flame" size= {30}/></Text>
        <View style={styles.menu}>
          {chowmin.map((chow, index) => (
            <View key={index}>
              <Card name={chow.name} priceNot={chow.priceNot} price={chow.price} image={chow.image} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    marginBottom: 75,
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    color: 'red',
    fontSize: 24,
    marginTop: 20,
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
  
});
StyleSheet;


