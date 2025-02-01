import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderRendezVous from "../../components/HeaderBooking";
import ListeVehicule from "../../components/CarList";
import Choixdate from "../../components/Dates";
import Creneau from "../../components/Slots";
import ValiderButton from "../../components/ValidateButton";

const Index = () => {
  return (
    <View style={styles.container}>
      <HeaderRendezVous />
      <ListeVehicule/>
      <Choixdate/>
      <Creneau/>
      <ValiderButton price={49000}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  
});

export default Index;
