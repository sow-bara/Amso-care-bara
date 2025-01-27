import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

type Props = {
  imageSource: any; 
};

const WelcomeImage = ({ imageSource }: Props) => {
  return (<View style={styles.containerImage}>
      <Image source={imageSource} style={styles.image} />
      </View>
  );
};

const styles = StyleSheet.create({

    containerImage:{
        alignItems: "center",
    },
    
    image: {
        top: 40,
        width: 358,
        height: 425,
        borderRadius: 24,  
        opacity: 0.6,
    },
});

export default WelcomeImage;