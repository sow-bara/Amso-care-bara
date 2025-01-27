import { ArrowRight } from 'lucide-react-native';
import { Link, } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <View style={styles.button}>
    <Link href="./RendezVous/RendezVous"> <ArrowRight size={24} color="#24294F" /> </Link>  
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white', 
        right: 20, 
        bottom: 35,
        position: 'absolute',
        width: 70, 
        height: 70, 
        borderRadius: 30, 
        justifyContent: 'center',
        alignItems: 'center', 
      },
    });

export default Button;