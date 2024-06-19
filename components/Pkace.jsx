import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function PlaceCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../assets/images/place1.jpeg")}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          </View>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers
          </Text>
          <View style={styles.iconRow}>
            <Icon name="enviromento" size={20} color="red" />
            <Text style={styles.cardRoute}>12 mins away</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../assets/images/place3.jpeg")}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Ram Mandir</Text>
            <Text style={styles.cardLabel}>Praise City, Ayodhya</Text>
          </View>
          <Text style={styles.cardDescription}>
            The Ram Mandir is a partially constructed Hindu temple complex in
            Ayodhya, Uttar Pradesh, India. Many Hindus believe that it is
            located at the site of Ram Janmabhoomi, the mythical birthplace of
            Rama, a principal deity of Hinduism.
          </Text>
          <View style={styles.iconRow}>
            <Icon name="enviromento" size={20} color="red" />
            <Text style={styles.cardRoute}>24 mins away</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../assets/images/place2.jpeg")}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Love City, Agra</Text>
          </View>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India. It was
            commissioned in 1631 by the fifth Mughal emperor,
          </Text>
          <View style={styles.iconRow}>
            <Icon name="enviromento" size={20} color="red" />
            <Text style={styles.cardRoute}>20 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical:20
  },
  cardTitle: {
    color: "#EA7773",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#218F76",
    marginTop: 6,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "justify",
    marginVertical: 4,
    color: "#2F363F",
  },
  cardRoute: {
    fontSize: 14,
    fontWeight: "600",
    color: "#095CE4",
  },
  card: {
    width: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 12,
    overflow: "hidden",
  },
  cardImage: {
    height: 200,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 20, // Adjust margin to ensure the heading doesn't overlap with the card
  },
  cardBody: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 4,
    gap: 3,
    alignItems: "center",
    marginBottom: 10,
  },
});
