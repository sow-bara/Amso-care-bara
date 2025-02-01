import { Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  imageSource: any;
  steps: number;
  currentStep: number;
};

const WelcomeImage = ({ imageSource, steps, currentStep }: Props) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.containerLogo}>
        <Image source={require("@/assets/images/logo-amso.png")} style={styles.logo} />
      </View>
      <View style={styles.containerPasser}>
        <Text style={styles.text}>Passer</Text>
        <ArrowRight size={24} color="white" />
      </View>
      <View style={styles.titletext}>
        <Text style={styles.title}>Votre véhicule entre de bonnes mains</Text>
      </View>
      <View style={styles.containerMessage}>
        <Text style={styles.textMessage}>
          Prenez soin de votre véhicule sans effort. Du diagnostic à la vidange, on s’occupe de tout pour que vous rouliez l’esprit tranquille.
        </Text>
      </View>
      <View style={styles.button}>
        <Link href="./Booking"> <ArrowRight size={24} color="#24294F" /> </Link>  
      </View>
      
      {/* Stepper intégré */}
      <View style={styles.stepperContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.06,
  },
  image: {
    width: width * 0.92,
    height: height * 0.5,
    borderRadius: 24,
    opacity: 0.6,
  },
  containerLogo: {
    position: "absolute",
    top: height * 0.07,
    alignSelf: "center",
  },
  logo: {
    width: width * 0.2,
    height: height * 0.07,
    resizeMode: "contain",
  },
  containerPasser: {
    flexDirection: "row",
    position: "absolute",
    top: height * 0.07,
    right: width * 0.06,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginRight: 8,
  },
  titletext: {
    width: "86%",
    alignSelf: "center",
    marginTop: height * 0.02,
  },
  title: {
    color: "white",
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "left",
  },
  containerMessage: {
    width: "85%",
    top: height * 0.01,
  },
  textMessage: {
    color: "white",
    fontSize: width * 0.048,
    textAlign: "justify",
    left: width * 0.06,
  },
  button: {
    backgroundColor: "white",
    right: width * 0.05,
    bottom: height * 0.05,
    position: "absolute",
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 0.07,
    justifyContent: "center",
    alignItems: "center",
    top: height * 0.8,
  },
  stepperContainer: {
    flexDirection: "row",
    marginVertical: 45,
    left: width * 0.05,
    position: "absolute",
    alignSelf: "flex-start",
    top: height * 0.8,

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

export default WelcomeImage;
