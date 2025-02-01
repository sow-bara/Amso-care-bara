import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native'; 

const Choixdate = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const dates = [
    { id: '1', day: 'Lun', date: '20' },
    { id: '2', day: 'Mar', date: '21' },
    { id: '3', day: 'Mer', date: '22' },
    { id: '4', day: 'Jeu', date: '23' },
    { id: '5', day: 'Ven', date: '24' },
  ];

  const changeMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const monthYear = currentDate.toLocaleString('default', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez la date</Text>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <ChevronLeft size={24} color="#000000" style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.monthYear}>{monthYear}</Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <ChevronRight size={24} color="#000000" style={styles.arrow} />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dateButton,
              selectedDate === item.id && styles.selectedButton,
            ]}
            onPress={() => setSelectedDate(item.id)}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === item.id && styles.selectedText,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.dateText1,
                selectedDate === item.id && styles.selectedText,
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.dateList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 13,
      paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    top: 10,

  },
  monthYear: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: "#525252",

  },
  title: {
    fontSize: 18,
    alignSelf:"flex-start",
     color: '#404040',
  },
  dateList: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
    marginTop: 20,
    left:10,
    width: 58,
    height: 60,
  },
  dateButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 13,
    marginRight: 8,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#1E97C8',    
  },
  dateText: {
    fontSize: 16,
    color: '#525252',
  },
  dateText1: {
    fontSize: 16,
    color: '#525252',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff', 
  },
  arrow: {
    backgroundColor: '#F6F6F6',
    padding: 8,
    borderRadius: 8,
  },
});

export default Choixdate;
