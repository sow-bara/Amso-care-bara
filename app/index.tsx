import React from "react";
import { View, StyleSheet } from "react-native";
import Passer from "./Passer";
import Logo from "./Logo";
import MessageUnboarding from "./MessageUnboarding";
import WelcomeImage from "./WelcomeImage";
import Stepper from "./Stepper";
import Button from "./Button";

const Index = () => {
  return (
    <View style={styles.container}>
      <WelcomeImage imageSource={require("@/assets/images/log.jpeg")} />
      <Passer /> 
      <Logo/>
      <MessageUnboarding titre="Votre véhicule entre de bonnes mains" message="Prenez soin de votre véhicule sans effort. Du diagnostic à la vidange, on s’occupe de tout pour que vous rouliez l’esprit tranquille."/>
      <Stepper steps={3} currentStep={0} />
      <Button/>
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