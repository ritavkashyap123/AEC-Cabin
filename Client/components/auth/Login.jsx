import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function Login() {
  const [mail, onChangeMail] = useState();
  const [password, onChangePassword] = useState();
  const [login, setLogin] = useState();

  return (
    <View style={styles.page}>
      <View style={styles.box}>
        <Text style={styles.head}>Login to your account</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={mail}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#43CA7D" : "#11624F",
            },
            styles.button,
          ]}
          onPress={login}
        >
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable onPress={{}}>
          <Text style={styles.content}>
            Don't have an account? <Text style={styles.login}>Sign Up</Text>
          </Text>
        </Pressable>
        <View style={styles.terms}>
          <Text style={{ color: "#888" }}>Terms & Conditions</Text>
          <Text style={{ color: "#888" }}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#43CA7D",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  head: {
    fontSize: 20,
    margin: 20,
  },
  input: {
    width: "90%",
    margin: 10,
    height: 40,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 10,
  },
  content: {
    fontSize: 15,
    margin: 10,
  },
  login: {
    color: "blue",
  },
  terms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    margin: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.3,
    color: "white",
  },
});
