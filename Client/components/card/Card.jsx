import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Counter from "react-native-counters";
import Feather from "react-native-vector-icons/Feather";
import { Image } from "react-native-elements";

export default function Card(props) {
  const minusIcon = () => {
    return <Feather name="minus" size={20} color={"white"} />;
  };

  const plusIcon = () => {
    return <Feather name="plus" size={20} color={"white"} />;
  };

  onChange = (number, type) => {
    console.log(number, type); // 1, + or -
  };

  return (
    <>
      <LinearGradient
        colors={["rgb(17, 98, 79) 0%", "rgb(67, 202, 125) 100%"]}
        style={styles.box}
      >
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.price}>
              {" "}
              ₹<Text style={styles.priceNot}>{" "}{props.priceNot}</Text>{" "}
              {props.price}
            </Text>
          </View>
          <View style={styles.imgBox}>
            <Image style={styles.photo} source={props.image} />
          </View>
        </View>
        <View style={styles.number}>
          <Counter
            buttonTextStyle={styles.btnText}
            buttonStyle={styles.btn}
            countTextStyle={styles.countText}
            minusIcon={minusIcon}
            plusIcon={plusIcon}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 110,
    width: "95%",
    borderRadius: 20,
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    margin: 15,
  },
  main: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  content: {
    flex: 3,
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  name: {
    fontSize: 25,
    color: "white",
  },
  price: {
    fontSize: 20,
    color: "white",
  },
  priceNot: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 14,
  },
  imgBox: {
    flex: 1,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  numberdiv: {
    width: "85%",
    alignItems: "flex-end",
    position: "relative",
  },
  number: {
    backgroundColor: "#FF4D00",
    borderRadius: 10,
    borderColor: "#D3D3D3",
    borderWidth: 2,
  },
  btnText: {
    color: "#fff",
  },
  btn: {
    borderColor: "#D3D3D3",
    borderWidth: 0,
  },
  countText: {
    color: "#fff",
  },
  photo: {
    height: 70,
    width: 70,
  },
});
