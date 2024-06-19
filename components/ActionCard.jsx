import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function ActionCard() {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}> Blog Post </Text>
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={{fontWeight:"600"}}>Which is the beautiful monument in India</Text>
            </View>
          <Image source={require("../assets/images/golden.jpg")} />
          <View>
            <Text numberOfLines={3}>
              The temple was founded by Guru Ramdas, the fourth Guru of the Sikh
              faith. Sikh's visit the temple to show their respect and worship
              for the Guru Granth Sahib (Holy Book). The water surrounding the
              Golden Temple is called the Amrit Saras Kund (pool of immortality)
              and is believe to have miraculous healing powers.
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  "https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=17"
                )
              }
            >
              <Text>Read More</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 6,
    marginVertical: 12,
  },
  card: {
    width: 380,
    height: 350,
    backgroundColor: "#74B9FF",
    marginHorizontal: 16,
    borderRadius: 6,
  },
  cardTitle: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
