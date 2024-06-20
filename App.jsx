import React from "react";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatCard from "./components/FlatCards"
import ElevatedCard from "./components/ElevatedCards"
import PlaceCard from "./components/Pkace"
import ActionCard from "./components/ActionCard"
import ContactUs from "./components/ContactUS"

const App = (props) => {
  return (
    // <SafeAreaView >
      <ScrollView style={{backgroundColor:"#E8EAEF"}}>
        <FlatCard></FlatCard>
        <ElevatedCard />
        <PlaceCard />
        <ContactUs/>
        <ActionCard></ActionCard>
        
      </ScrollView>
    // </SafeAreaView>
  );
};


export default App;
