import { Bell, ChevronLeft } from "lucide-react-native";
import { View, Text, StyleSheet } from "react-native";

const HeaderBooking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ChevronLeft size={20} color="#24294F" />
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 43, 
  },
  text: {
    fontSize: 18,
    color: "#404040",
    fontWeight: "600",
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
