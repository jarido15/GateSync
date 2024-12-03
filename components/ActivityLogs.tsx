import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import StudentDashboard from './StudentPage';  // Import StudentPage (if needed)

const MessageScreen = ({ navigation }) => {
  return (
    <>
      {/* Main ScrollView */}
      <ScrollView style={styles.container}>
        {/* Navigation Bar */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('StudentPage')}>
            <Image
              source={require('../images/back.png')} // Replace with your burger menu image path
              style={styles.back}
            />
          </TouchableOpacity>
          <View style={styles.navCenter}>
            <Image
              source={require('../images/logo.png')} // Replace with your logo image path
              style={styles.logo}
            />
            <Image source={require('../images/GateSync.png')} style={styles.gatesync} />
          </View>
          <TouchableOpacity onPress={() => console.log('Profile pressed')}>
            <Image
              source={require('../images/account.png')} // Replace with your profile icon image path
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeText}>Activity Logs</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#BCE5FF', // Background color for the navigation bar
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 35, // Adjust logo size
    height: 34, // Adjust logo size
    resizeMode: 'contain', // Keep the aspect ratio of the logo
    marginRight: 10, // Space between logo and text
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 0.3, // Shadow opacity (iOS)
    shadowRadius: 4, // Shadow radius (iOS)
    elevation: 5, // Shadow for Android
  },
  gatesync: {
    width: 100, // Adjust logo size
    height: 34, // Adjust logo size
    top: 5, 
    resizeMode: 'contain', // Keep the aspect ratio of the logo
    marginRight: 10, // Space between logo and text
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 0.3, // Shadow opacity (iOS)
    shadowRadius: 4, // Shadow radius (iOS)
    elevation: 5, // Shadow for Android
  },
  back: {
    width: 30, // Adjust menu icon size
    height: 30, // Adjust menu icon size
    resizeMode: 'contain',
  },
  navbarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
  profileIcon: {
    width: 30, // Adjust profile icon size
    height: 30, // Adjust profile icon size
    resizeMode: 'contain',
  },
  content: {
    marginTop: 20,
    padding: 20,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: '800',
    fontFamily: 'Kanit',
    color: '#5394F2',
    top: -40,
  },
});

export default MessageScreen;
