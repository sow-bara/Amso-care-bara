// app/Booking.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import CarList from "@/components/CarList";
import Dates from "@/components/Dates";
import Slots from "@/components/Slots";
import ValidateButton from "@/components/ValidateButton";

const Booking = () => {
  return (
    <View style={styles.container}>
      <CarList />
      <Dates />
      <Slots />
      <ValidateButton price={49000} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});

export default Booking;
