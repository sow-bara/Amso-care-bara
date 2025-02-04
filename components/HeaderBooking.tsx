import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Bell, ChevronLeft } from "lucide-react-native";

const HeaderBooking = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.iconContainer}>
        <ChevronLeft size={20} color="#24294F" />
      </TouchableOpacity>
      <Text style={styles.text}>Prise de rendez-vous</Text>
      <View style={styles.iconContainer}>
        <Bell size={20} color="#24294F" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF", // Ajout du fond blanc
    // height: 80,
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
