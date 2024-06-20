import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ContactUs() {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mFRAFSS_xnxipt664Y3fVyHzgFFd35ft2xOhAyKQP8ueZvQiCyf33SkZNwpyDzRCqic&usqp=CAU",
    },
    {
      id: 2,
      name: "Janesh Smith",
      designation: "Project Manager",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "UX Designer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNblQWRB1Q5yrG_4xz0_Vry0MlmChiNRy9krDxj2QAMZ_pUQH8Xyb7sGPCXu_AlUtu_rc&usqp=CAU",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Quality Assurance",
      image: "https://i.pinimg.com/564x/b1/68/2a/b1682a94b483db24dcf54c09f38cafa2.jpg",
    },
    {
      id: 5,
      name: "David Brown",
      designation: "DevOps Engineer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2C7YHgKTsRBv1DJRH_hT0lWoketrbxQLgPbH0hZjmSEEetTxDSr1XFLjbCDZooXZ-lM&usqp=CAU",
    },
  ];

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Contact Us</Text>
      <ScrollView scrollEnabled={false} style={styles.mainContainer}>
        {employees.map(({ id, name, designation, image }) => (
          <View key={id} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.designation}>{designation}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 10,
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom:10
  },
  container: {
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10
  },
  name: {
    fontSize:24,
    marginTop:5,
    fontWeight:"500"
  },
  designation: {},
  image: { 
    height: 100,
    width:100,
    resizeMode:"contain",
    borderRadius:50,
    backgroundColor:"white"
},
});
