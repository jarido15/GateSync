import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Image, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const ScheduleScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Format: YYYY-MM-DD
  const [timeIn, setTimeIn] = useState(new Date());
  const [timeOut, setTimeOut] = useState(new Date());
  const [showTimeInPicker, setShowTimeInPicker] = useState(false);
  const [showTimeOutPicker, setShowTimeOutPicker] = useState(false);

  const onChangeTimeIn = (event, selectedTime) => {
    const currentTime = selectedTime || timeIn;
    setShowTimeInPicker(false);
    setTimeIn(currentTime);
  };

  const onChangeTimeOut = (event, selectedTime) => {
    const currentTime = selectedTime || timeOut;
    setShowTimeOutPicker(false);
    setTimeOut(currentTime);
  };

  const handleSave = () => {
    console.log('Selected Date:', selectedDate);
    console.log('Time In:', timeIn.toLocaleTimeString());
    console.log('Time Out:', timeOut.toLocaleTimeString());
    Alert.alert('Saved', 'Your date and times have been saved (logged to console).');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('StudentPage')}>
          <Image
            source={require('../images/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>
        <View style={styles.navCenter}>
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
          <Image
            source={require('../images/GateSync.png')}
            style={styles.gatesync}
          />
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar Component */}
      <View style={styles.section}>
        <Text style={styles.label}>Select Date:</Text>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#007bff' },
          }}
          theme={{
            selectedDayBackgroundColor: '#007bff',
            todayTextColor: '#007bff',
            arrowColor: '#007bff',
          }}
        />
        {/* Selected Date Display */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Selected Date:</Text>
          <Text style={styles.dateText}>{selectedDate}</Text>
        </View>
      </View>

      {/* Time In Picker */}
      <View style={styles.section}>
        <Text style={styles.label}>Time In:</Text>
        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setShowTimeInPicker(true)}
        >
          <Text style={styles.timeText}>{timeIn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showTimeInPicker && (
          <DateTimePicker
            value={timeIn}
            mode="time"
            display="spinner"
            onChange={onChangeTimeIn}
          />
        )}
      </View>

      {/* Time Out Picker */}
      <View style={styles.section}>
        <Text style={styles.label}>Time Out:</Text>
        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setShowTimeOutPicker(true)}
        >
          <Text style={styles.timeText}>{timeOut.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showTimeOutPicker && (
          <DateTimePicker
            value={timeOut}
            mode="time"
            display="spinner"
            onChange={onChangeTimeOut}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  dateContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
   navbar: {
    width: '115%', // Ensures the navbar spans the full screen width
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BCE5FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: 'absolute', // Fixes it to the top
    top: 0, // Anchors the navbar at the top
    zIndex: 10, // Ensures it stays above other components
  },
  navCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 34,
    resizeMode: 'contain',
    marginRight: 10,
  },
  gatesync: {
    width: 100,
    height: 34,
    resizeMode: 'contain',
  },
  back: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  saveButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
    left: '-2%',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ScheduleScreen;