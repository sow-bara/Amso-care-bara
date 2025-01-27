import { ArrowRight } from "lucide-react-native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Passer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Passer</Text> 
      <ArrowRight size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignSelf: "center",
    position: "absolute", 
    top: 50,
    left: 273,
  },
  text: {
    fontSize: 20,
    color: "white",
    marginRight: 8, 
  },
});

export default Passer;
