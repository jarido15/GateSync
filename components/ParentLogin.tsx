import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ParentLogin = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simple validation
        if (username === '' || password === '') {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        // You can replace this with actual login logic (e.g., API request)
        Alert.alert('Success', `Welcome, ${username}!`);

        // Navigate to another screen after successful login (optional)
        // navigation.navigate('Dashboard');  // Navigate to the next screen
    };

    return (
        <View style={styles.container}>
            <View style={styles.bluecircle} />

            <LinearGradient
                colors={['#5cb8ff', '#6b9bfa']} // Gradient colors (same as splash screen)
                style={styles.bluecircle2}
            />
            <Text style={styles.heading}>Parentent</Text>
            <Text style={styles.heading}>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginOption')}>
                <Image
                    source={require('../images/arrow_back.png')}
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../images/facescanner.png')} 
                style={styles.facescanner}
            />
            <Image
                source={require('../images/arrows.png')} 
                style={styles.arrows1}
            />
            {/* Input Container */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter ID Number"
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor={'#686D76'}
                />
                <Text style={styles.ID}>Student ID</Text>
                <Text style={styles.password}>Password</Text>
                <Text style={styles.forgotpassword}>Forgot Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor={'#686D76'}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.haveacc}>Don't have an account?</Text>
            <TouchableOpacity
                style={styles.registerLink}
                onPress={() => navigation.navigate('ParentSignup')} // Link to a Register screen (optional)
            >
                <Text style={styles.registerText}>Register here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    heading: {
        fontSize: 48,
        fontWeight: '500',
        bottom: 560,
        color: '#fff',
        textShadowColor: '#000', // Shadow color (black in this case)
        textShadowOffset: { width: 1, height: 2 }, // Offset of the shadow (you can adjust these values)
        textShadowRadius: 8, // Blur radius (higher values make the shadow more diffuse)
    },
    arrow:{
        width: 53,
        height: 49,
        top: -720,
        right: 150,
    },
    facescanner: {
        width: 57,
        height: 61,
        top: -880,
        right: 150,
    },
    arrows1: {
        width: 22,
        height: 19,
        top: -900,
        right: 170,
    },
    ID: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        bottom: 55,

    },
    password: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        top: 40,
    },
    bluecircle: {
        width: 550,
        height: 550,
        borderRadius: 270,  // This makes it a circle
        backgroundColor: '#0E2C6E',  // Blue color for the circle
        left: 150,
        bottom: -800,
    },
    bluecircle2: {
        width: 490,
        height: 880,
        borderTopLeftRadius: 180 ,
        borderTopRightRadius: 340,
        backgroundColor: '#0E2C6E',  // Blue color for the circle
        left: 5,
        bottom: -260,
    },
    forgotpassword:{
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        top: 200,
        textDecorationLine:'underline',
    },
    haveacc:{
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        top: -740,
    },
    inputContainer: {
        width: '100%',
        height: 355,
        bottom: 670,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5, // Shadow for Android
    },
    input: {
        width: '100%',
        padding: 15,
        // marginBottom: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        backgroundColor: '#fff',
        top: 30,
    },
    button: {
        backgroundColor: '#000',
        width: '85%',
        height: 43,
        top: -800,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        top: 8,
        fontWeight: 'bold',
    },
    registerLink: {
        marginTop: 10,
    },
    registerText: {
        color: '#ACC7E0',
        fontSize: 16,
        top: -750,
    },
});

export default ParentLogin;
