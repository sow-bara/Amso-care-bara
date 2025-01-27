import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderRendezVous from "./HeaderRendezVous";
import ListeVehicule from "./ListeVehicule";
import Choixdate from "./Choixdate";
import Creneau from "./Creneau";
import ValiderButton from "./ValiderButton";

const RendezVous = () => {
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

export default RendezVous;
