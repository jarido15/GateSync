import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

const GetStartedScreen = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#2f3ead', '#5cb8ff']}  // Gradient colors
            style={styles.container} // Apply gradient styles
        >
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('LoginOption')} // Navigate to the Login screen
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>


            <Image
                source={require('../images/facescanner.png')} 
                style={styles.image}
            />
            <Image
                source={require('../images/arrows.png')} 
                style={styles.imagearrow}
            />
            <Image
                source={require('../images/GateSync.png')} 
                style={styles.imageGS}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Make sure the gradient covers the whole screen
        justifyContent: 'center',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',  // White text color for contrast
    },
    image: {
        width: 211,
        height: 182,
        bottom: 110,
        left: 90,
        marginBottom: 20,
    },
    imageGS: {
        width: 195,
        height: 50,
        bottom: 120,
        left: 90,
    },
    imagearrow: {
        width: 80,
        height: 70,
        position: 'absolute',
        top: 290,
        left: 90,
    },
    button: {
        backgroundColor: '#0E2C6E',
        paddingVertical: 15, // Vertical padding for button
        paddingHorizontal: 40, // Horizontal padding for button
        borderRadius: 25, // Rounded corners
        elevation: 3, // Shadow effect (on Android)
        shadowColor: '#000', // Shadow color (iOS)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.2, // Shadow opacity (iOS)
        shadowRadius: 5, // Shadow blur radius (iOS)
        borderWidth: 1,
        borderColor: '#fff',
        width: 203,
        height: 55,
        top: 200,
        left: 95,

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',  // Button text color
        textAlign: 'center', // Center align the text inside the button
        fontFamily: 'Kanit-SemiBold',
    },
});

export default GetStartedScreen;
