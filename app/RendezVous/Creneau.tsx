import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Creneau = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null); 

  const slots = [
    { id: 1, time: "08H00 - 09H00", enabled: true },
    { id: 2, time: "09H00 - 10H00", enabled: false },
    { id: 3, time: "10H00 - 11H00", enabled: true },
    { id: 4, time: "11H00 - 12H00", enabled: true },
    { id: 5, time: "12H00 - 13H00", enabled: true },
    { id: 6, time: "13H00 - 14H00", enabled: false },
    { id: 7, time: "15H00 - 16H00", enabled: true },
    { id: 8, time: "16H00 - 17H00", enabled: true },
    { id: 9, time: "17H00 - 18H00", enabled: false },
  ];

  const handleSlotPress = (id: number) => {
    const slot = slots.find((slot) => slot.id === id);
    if (slot?.enabled) {
      setSelectedSlot(id);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez le créneau</Text>
      <View style={styles.grid}>
        {slots.map((slot) => (
          <TouchableOpacity
            key={slot.id}
            style={[
              styles.slot,
              !slot.enabled && styles.disabledSlot,
              selectedSlot === slot.id && styles.selectedSlot, 
            ]}
            onPress={() => handleSlotPress(slot.id)}
            disabled={!slot.enabled}
          >
            <Text
              style={[
                styles.slotText,
                !slot.enabled && styles.disabledText,
                selectedSlot === slot.id && styles.selectedText, 
              ]}
            >
              {slot.time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: '#404040',
    alignSelf: "flex-start",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  slot: {
    width: "30%",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  disabledSlot: {
    backgroundColor: "#F6F6F6",
  },
  selectedSlot: {
    backgroundColor: "#1E97C8", 
  },
  slotText: {
    fontSize: 14,
    color: "#333",
  },
  disabledText: {
    color: "#aaa",
  },
  selectedText: {
    color: "#fff", 
  },
});

export default Creneau;
