import React from "react";
import { View, Image, Text, StyleSheet, ImageSourcePropType, TouchableOpacity } from "react-native";

type VehicleProps = {
  vehicle: {
    id: string;
    marque: string;
    model: string;
    moteur: string;
    image: ImageSourcePropType;
  };
  isSelected: boolean; 
  onSelect: () => void; 
};

const AjoutVehicle = ({ vehicle, isSelected, onSelect }: VehicleProps) => {
  return (
    <TouchableOpacity onPress={onSelect} activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          { backgroundColor: isSelected ? "#1E97C8" : "#F7F7F7" },  ]}
    >
        <Image source={vehicle.image} style={styles.vehicle} />
        <Text style={[styles.marque, { color: isSelected ? "#FFFFFF" : "#404040" }]}>
          {vehicle.marque}
        </Text>
        <Text style={[styles.details, { color: isSelected ? "#FFFFFF" : "#404040" }]}>
          {vehicle.model}
        </Text>
        <Text style={[styles.details, { color: isSelected ? "#FFFFFF" : "#404040" }]}>
          {vehicle.moteur}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 158,
    width: 139,
    borderRadius: 20,
    margin: 5, 
    alignItems: "center",
    justifyContent: "space-between",
  },
  vehicle: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  marque: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default AjoutVehicle;
