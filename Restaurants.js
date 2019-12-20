import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import AddRestaurant from "./AddRestaurant";

//import ActionButton from "react-native-action-button";
//import AddRestaurant from "./AddRestaurant";

export default function Restaurants(props) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <AddRestaurantButton navigation={navigation} />
    </View>
  );
}

function AddRestaurantButton(props) {
  const { navigation } = props;
  return (
    <ActionButton
      buttonColor="rgba(231,76,60,1)"
      onPress={() => {
        navigation.navigate("AddRestaurant");
      }}
    />
  );
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
