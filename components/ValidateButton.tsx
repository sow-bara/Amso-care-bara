import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ArrowRight } from "lucide-react-native";

interface ValiderButtonProps {
  price?: number;
}

const ValidateButton = ({ price }: ValiderButtonProps) => {
  const handlePress = () => {
    console.log("Valider pressed");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          Valider ({price ? price.toLocaleString() : "N/A"} CFA)
        </Text>
        <ArrowRight size={24} color="white" style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: 355,
    height: 50,
    flexDirection: "row", 
    backgroundColor: "#1E97C8",
    justifyContent: "center",
    alignItems: "center", 
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  arrow: {
    marginLeft: 8,
  },
});

export default ValidateButton;
