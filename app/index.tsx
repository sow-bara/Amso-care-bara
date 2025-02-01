import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeImage from "./WelcomeImage";

const Index = () => {
  return (
    <View style={styles.container}>
      <WelcomeImage imageSource={require("@/assets/images/log.jpeg")} steps={3} currentStep={0}  />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24294F",
  },
  
});

export default Index;