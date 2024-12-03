import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StudentSignup = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    // Static user data
    const staticUser = {
        username: 'test',
        email: 'test@example.com',
        password: 'password',
        idNumber: '123',
    };

    const handleSignup = () => {
        // Validation for empty fields
        if (!username || !email || !password || !idNumber) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // Check if the entered details match the static user
        if (
            username === staticUser.username &&
            email === staticUser.email &&
            password === staticUser.password &&
            idNumber === staticUser.idNumber
        ) {
            Alert.alert('Success', `Welcome, ${username}!`);
            // Navigate to login or dashboard
            navigation.navigate('StudentLogin');
        } else {
            Alert.alert('Error', 'User registration failed. Static user details do not match.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.bluecircle} />
            <LinearGradient
                colors={['#5cb8ff', '#6b9bfa']}
                style={styles.bluecircle2}
            />
            <Text style={styles.heading}>Student</Text>
            <Text style={styles.heading}>Sign Up</Text>

            <Image
                source={require('../images/facescanner.png')} 
                style={styles.facescanner}
            />
            <Image
                source={require('../images/arrows.png')} 
                style={styles.arrows1}
            />
            <TouchableOpacity onPress={() => navigation.navigate('StudentLogin')}>
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

                <Text style={styles.label}>ID Number</Text>
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

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Image
                            source={require('../images/Check.png')} // Replace with your custom image
                            style={styles.modalImage}
                        />
                        <Text style={styles.modalTitle}>Registration Successful!</Text>
                        <Text style={styles.modalMessage}>Welcome, {username}! You have successfully registered.</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('StudentLogin');
                            }}
                        >
                            <Text style={styles.modalButtonText}>Go to Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    modalImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#5cb8ff',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default StudentSignup;
