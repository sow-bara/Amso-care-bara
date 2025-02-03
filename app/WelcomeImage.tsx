import { Link } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
} from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  imageSource: any;
  steps: number;
  currentStep: number;
};

const WelcomeImage = ({ imageSource, steps, currentStep }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Votre véhicule entre de bonnes mains</Text>
        </View>
        <View style={styles.containerMessage}>
          <Text style={styles.textMessage}>
            Prenez soin de votre véhicule sans effort. Du diagnostic à la vidange, on s’occupe de tout pour que vous rouliez l’esprit tranquille.
          </Text>
        </View>
        <View style={styles.button}>
        <Link href="/Booking">
          <ArrowRight size={24} color="#24294F" />
        </Link>
      </View>
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
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    top: "5%"
  },
  
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    borderRadius: 24,
    opacity: 0.6,
  },
  containerLogo: {
    position: "absolute",
    top: height * 0.01,
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
    top: height * 0.01,
    right: width * 0.06,
    alignItems: "center",
    cursor: "pointer",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginRight: 8,
  },
  titleContainer: {
    width: "86%",
    alignSelf: "center",
    marginTop: height * 0.02,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  containerMessage: {
    width: "85%",
    marginTop: height * 0.02,
    
  },
  textMessage: {
    color: "white",
    fontSize: 19,
    textAlign: "justify",
    left: width * 0.07,
  }
  ,
  button: {
    backgroundColor: "white",
    right: width * 0.05,
    width: 60,
    height: 60,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: height * 0.76,
  },
  stepperContainer: {
    flexDirection: "row",
    left: width * 0.07,
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
    opacity: 0.5,
  },
});

export default WelcomeImage;