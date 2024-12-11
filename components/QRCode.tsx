import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ViewQRPage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#84B4FC']} // Gradient background for the full page
      style={styles.container}
    >
      <StatusBar backgroundColor="#fFF" barStyle="light-content" />
      <LinearGradient
        colors={['#82D8FF', '#0040FF']} // Gradient colors for content container
        style={styles.contentContainer}
      >
        {/* QR code container */}
        <View style={styles.Square}>
          <Image
            source={require('../images/Vector.png')} // Replace with your QR code image path
            style={styles.qrCode}
          />
        </View>
        <Text style={styles.title}>Scan your entry code</Text>
      </LinearGradient>

      {/* Return to Dashboard Button */}
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('StudentPage')} // Correct placement of onPress
      >
        <Text style={styles.return}>Dashboard</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  contentContainer: {
    alignItems: 'center', // Align items in the center
    justifyContent: 'center', // Align items in the center
    padding: 20,
    borderRadius: 21,
    width: '80%', // Ensure it takes up some space, adjust as needed
    height: 464, // Set a specific height
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#fff', // Color for the title
    bottom: '-10%',
  },
  Button: {
    width: '60%',
    height: 63,
    backgroundColor: '#2C41FF',
    borderRadius: 15,
    alignItems: 'center', // Center text inside the button
    justifyContent: 'center',
    marginTop: 20, // Adjusted for spacing
  },
  return: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: '#fff', // Color for the title
  },
  qrCode: {
    width: 200, // Adjust width
    height: 200, // Adjust height
    alignSelf: 'center',
  },
  Square: {
    width: 233,
    height: 240,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center image inside the square
    alignItems: 'center',
    marginBottom: 20, // Adds space between QR code and title
  },
});

export default ViewQRPage;
