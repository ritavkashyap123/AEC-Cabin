import { SearchBar } from "react-native-elements";
import React from "react";
import { StyleSheet } from "react-native";

export default class App extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        lightTheme
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  inputContainer: {
    backgroundColor: "#f0f0f0",
  }
});
StyleSheet;
