import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  steps: number;
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: steps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            currentStep === index ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginVertical: 45,
      left: 13,
      position: "absolute",
      bottom: 16,
      alignSelf: "flex-start"
    },
    step: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
    },
    activeStep: {
      backgroundColor: "#ffffff",
      width: 30, 
    },
    inactiveStep: {
      backgroundColor: "#ffffff",
    },
  });
  
export default Stepper;
