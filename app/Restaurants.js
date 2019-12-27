import React, { useRef, useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import AddRestaurant from "./AddRestaurant";
import List from "../app/components/List";
import { firebaseApp } from "../app/utils/FireBase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);
//import ActionButton from "react-native-action-button";
//import AddRestaurant from "./AddRestaurant";

export default function Restaurants(props) {
  const { navigation } = props;
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [startRestaurants, setStartRestaurants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const limitRestaurants = 8;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(useInfo => {
      setUser(userInfo);
    });
  }, []);

  useEffect(() => {
    db.collection("restaurants")
      .get()
      .then(snap => {
        setTotalRestaurants(snap.size);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
      <AddRestaurantButton navigation={navigation} />
      <List />
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
