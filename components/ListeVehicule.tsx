import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AjoutVehicle from "./AjoutVehicule"; 

const ListeVehicule = () => {
  const [vehicles, setVehicles] = useState([
    { id: '1', marque: "Toyota", model: "Corolla", moteur: "V4", image: require("@/assets/images/Vehicle.png") },
    { id: '2', marque: "Honda", model: "Civic", moteur: "V6", image: require("@/assets/images/Vehicle1.png") },
    { id: '3', marque: "BMW", model: "Série 3", moteur: "I4 Turbo", image: require("@/assets/images/Vehicle2.png") },
    { id: '4', marque: "BMW", model: "Série 3", moteur: "I6", image: require("@/assets/images/Vehicle3.png") },
  ]);

  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null); 

  return (
    <View style={styles.container}>
      <Text style={styles.selectionText}>Sélectionner le véhicule</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.vehicleContainer}
        showsHorizontalScrollIndicator={false}
      >
        {vehicles.map((vehicle) => (
          <View key={vehicle.id} style={styles.vehicleItem}>
            <AjoutVehicle 
              vehicle={vehicle} 
              isSelected={selectedVehicleId === vehicle.id} 
              onSelect={() => setSelectedVehicleId(vehicle.id)} 
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} >
          <View style={styles.addButtonContent}>
            <Text style={styles.addButtonText}>+</Text>
            <Text style={styles.addText}>Ajouter Véhicule</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 13,
    },
    selectionText: {
      fontSize: 18,
      marginLeft: 20,
      color: "#404040",
    },
    vehicleContainer: {
      alignItems: "center", 
    },
    vehicleItem: {
      marginHorizontal: 5, 
      marginVertical: 5,
    },
    addButton: {
      height: 158,
      width: 139,
      backgroundColor: "#F6F6F6",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10,
    },
    addButtonContent: {
      alignItems: "center",
    },
    addButtonText: {
      fontSize: 20,
      color: "white",
      backgroundColor: "#1E97C8",
      width: 20,
      height: 25,
      textAlign: "center",
      textAlignVertical: "center",
      borderRadius: 5,
    },
    addText: {
      marginTop: 10,
      fontSize: 16,
      color: "#404040",
      textAlign: "center",
      fontWeight: "bold",
    },
  });
  

export default ListeVehicule;
