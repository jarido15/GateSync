import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ParentSignup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idNumber, setIdNumber] = useState('');

    const handleSignup = () => {
        // Simple validation
        if (!username || !email || !password || !idNumber) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // You can replace this with actual signup logic (e.g., API request)
        Alert.alert('Success', `Welcome, ${username}!`);

        // Optionally navigate to the Login screen after successful signup
        // navigation.navigate('StudentLogin');
    };

    return (
        <View style={styles.container}>
            <View style={styles.bluecircle} />
            <LinearGradient
                colors={['#5cb8ff', '#6b9bfa']}
                style={styles.bluecircle2}
            />
            <Text style={styles.heading}>Parent</Text>
            <Text style={styles.heading}>Sign Up</Text>

            <Image
                source={require('../images/facescanner.png')} 
                style={styles.facescanner}
            />
            <Image
                source={require('../images/arrows.png')} 
                style={styles.arrows1}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ParentLogin')}>
                <Image
                    source={require('../images/arrow_back.png')}
                    style={styles.arrow}
                />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    value={username}
                    onChangeText={setUsername}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Stundent ID</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter ID Number"
                    value={idNumber}
                    onChangeText={setIdNumber}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign up</Text>
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
        bottom: 570,
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 8,
    },
    arrow: {
        width: 53,
        height: 49,
        top: -800,
        right: 150,
    },
    facescanner: {
        width: 57,
        height: 61,
        top: -820,
        right: 150,
    },
    arrows1: {
        width: 22,
        height: 19,
        top: -840,
        right: 170,
    },
    bluecircle: {
        width: 550,
        height: 550,
        borderRadius: 270,
        backgroundColor: '#0E2C6E',
        left: 150,
        bottom: -800,
    },
    bluecircle2: {
        width: 490,
        height: 880,
        borderTopLeftRadius: 180,
        borderTopRightRadius: 340,
        backgroundColor: '#0E2C6E',
        left: 5,
        bottom: -255,
    },
    inputContainer: {
        width: '100%',
        height: 470,
        bottom: 680,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#000',
        width: '85%',
        height: 43,
        top: -755,
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
    haveacc: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        top: -725,
    },
    registerLink: {
        marginTop: 10,
    },
    registerText: {
        color: '#ACC7E0',
        fontSize: 16,
        top: -730,
    },
});

export default ParentSignup;
