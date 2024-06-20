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
          <Text style={{ fontWeight: "600", fontSize: 16, color: "white" }}>
            Which is the beautiful monument in India
          </Text>
        </View>
        <Image
          source={require("../assets/images/golden.jpg")}
          style={styles.cardImage}
        />
        <View>
          <Text
            numberOfLines={4}
            style={{ color: "#ffffff", marginHorizontal: 20 , fontSize:16,textAlign:"justify"}}
          >
            The temple was founded by Guru Ramdas, the fourth Guru of the Sikh
            faith. Sikh's visit the temple to show their respect and worship for
            the Guru Granth Sahib (Holy Book). The water surrounding the Golden
            Temple is called the Amrit Saras Kund (pool of immortality) and is
            believe to have miraculous healing powers.
          </Text>
        </View>
        <View style={styles.cardLink}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://www.youtube.com/watch?v=HWuRpzdoVa4"
              )
            }
          >
            <Text style={styles.cardButton}>View More..</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://www.britannica.com/topic/Golden-Temple"
              )
            }
          >
            <Text style={styles.cardButton}>
              Follow me!
            </Text>
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
  },
  card: {
    width: 380,
    // height: 380,
    backgroundColor: "#70a1ff",
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 8,
  },
  cardTitle: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    marginBottom: 15,
    height: 200,
    width: "100%",
    resizeMode: "stretch",
  },
  cardLink: {
    marginVertical: 20,
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardButton: { color: "blue", fontWeight: "500",backgroundColor:"white",paddingHorizontal:14,paddingVertical:6,borderRadius:6 },
});
