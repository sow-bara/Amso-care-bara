import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={stylelogo.container}>
      <Image
        source={require("@/assets/images/logo-amso.png")} 
        
      />
    </View>
  );
};

const stylelogo = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    top: 46, 
    width: 77,
    height: 55,
  },

 
});

export default Logo;
