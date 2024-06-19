import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default FlatCard = (props) => {
  return (
    <View>
      <Text style={styles.text}>Flate Cards</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          flexDirection: "row",
          padding: 8,
        }}
      >
        <View style={[styles.box1, styles.box]}>
          <Text style={styles.innerText}>Red</Text>
        </View>
        <View style={[styles.box2, styles.box]}>
          <Text style={styles.innerText}>Green</Text>
        </View>
        <View style={[styles.box3, styles.box]}>
          <Text style={styles.innerText}>orange</Text>
        </View>
        <View style={[styles.box4, styles.box]}>
          <Text style={styles.innerText}>blue</Text>
        </View>
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
  box: {
    width: 80,
    height: 80,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin:5
  },
  box1: {
    backgroundColor: "red",
  },
  box2: {
    backgroundColor: "teal",
  },
  box3: {
    backgroundColor: "orange",
  },
  box4: {
    backgroundColor: "lightblue",
  },
  innerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
