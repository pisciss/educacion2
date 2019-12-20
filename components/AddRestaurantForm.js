import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
  Keyboard
} from "react-native";
import { Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { render } from "react-dom";

export default function AddRestaurantForm(props) {
  const { toastRef, setIsLoading, navigation } = props;
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const saveData = () => {
    // const {restaurantname,direccion} = this.state;
    let myArray = {
      restaurantName: restaurantName,
      restaurantAddress: restaurantAddress
    };
    AsyncStorage.setItem("1", "myArray", JSON.stringify(myArray));
    toastRef.current.show("Datos guardados Correctamente");
  };
  const showData = async () => {
    let myArray = await AsyncStorage.getItem("myArray");
    let d = JSON.parse(myArray);
    alert(d.restaurantName + " " + d.restaurantAddress);
  };
  return (
    <ScrollView>
      <FormAdd
        setRestaurantName={setRestaurantName}
        setRestaurantAddress={setRestaurantAddress}
      />
      <Button title="Guardar" onPress={saveData} />
      <Button title="Ver Datos" onPress={showData} />
    </ScrollView>
  );
}
function FormAdd(props) {
  const { setRestaurantAddress, setRestaurantName } = props;
  return (
    <View style={StyleSheet.viewForm}>
      <Input
        placeholder="Nombre del Restaurante"
        containerStyle={styles.input}
        onChange={e => setRestaurantName(e.nativeEvent.text)}
        // onChangeText ={restaurantname=> this.setState({restaurantname})}
      />
      <Input
        placeholder="Dirección"
        containerStyle={styles.input}
        onChange={e => setRestaurantAddress(e.nativeEvent.text)}
        //  onChangeText ={direccion=> this.setState({direccion})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  viewForm: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    marginBottom: 10
  }
});
