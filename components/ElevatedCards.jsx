import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default ElevatedCard = (props) => {
  return (
    <View>
      <Text style={styles.text}>Elevated Card</Text>
      <View>
        <ScrollView horizontal style={styles.container}>
          <View style={[styles.box]}>
            <Image
              source={require("../assets/images/fruit1.webp")}
              resizeMode="contain"
              style={styles.innerText}
            />
          </View>
          <View style={[ styles.box]}>
          <Image
              source={require("../assets/images/fruit2.jpeg")}
              resizeMode="cover"
              style={styles.innerText}
            />
          </View>
          <View style={[ styles.box]}>
            <Image
              source={require("../assets/images/fruit3.webp")}
              resizeMode="cover"
              style={styles.innerText}
            />
          </View>
          <View style={[ styles.box]}>
            <Image
              source={require("../assets/images/fruit4.webp")}
              resizeMode="cover"
              style={styles.innerText}
            />
          </View>
          <View style={[ styles.box]}>
            <Image
              source={require("../assets/images/fruit5.webp")}
              resizeMode="cover"
              style={styles.innerText}
            />
          </View>
          <View style={[ styles.box]}>
            <Image
              source={require("../assets/images/fruit6.webp")}
              resizeMode="cover"
              style={styles.innerText}
            />
          </View>
          <View style={[ styles.box]}>
            <Image
              source={require("../assets/images/fruit7.webp")}
              resizeMode="cover"
              style={styles.innerText}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
    elevation:1,
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
 
  innerText: { width: 80, height: 80,borderWidth:2,borderColor:"#ccc",borderRadius: 8}
});
