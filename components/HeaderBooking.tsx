import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Bell, ChevronLeft } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const HeaderBooking = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconContainer}>
          <ChevronLeft size={20} color="#24294F" />
        </TouchableOpacity>
        <Text style={styles.text}>Prise de rendez-vous</Text>
        <View style={styles.iconContainer}>
          <Bell size={20} color="#24294F" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: "#FFFFFF", // Assure que l'arrière-plan est le même que l'en-tête
    paddingTop: 50, // Ajuste cette valeur pour compenser la barre d'état sur Android
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF", // Même arrière-plan que SafeAreaView
  },
  text: {
    fontSize: 18,
    color: "#404040",
    fontWeight: "600",
    marginLeft: 10,
  },
  iconContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeaderBooking;
