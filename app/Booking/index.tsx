import CarList from "@/components/CarList";
import Dates from "@/components/Dates";
import HeaderBooking from "@/components/HeaderBooking";
import Slots from "@/components/Slots";
import ValidateButton from "@/components/ValidateButton";
import React from "react";
import { View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <HeaderBooking />
      <CarList/>
      <Dates/>
      <Slots/>
      <ValidateButton price={49000}  />
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
