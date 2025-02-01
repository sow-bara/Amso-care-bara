import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderRendezVous from "../../components/HeaderRendezVous";
import ListeVehicule from "../../components/ListeVehicule";
import Choixdate from "../../components/Choixdate";
import Creneau from "../../components/Creneau";
import ValiderButton from "../../components/ValiderButton";

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
