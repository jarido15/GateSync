/* eslint-disable react/self-closing-comp */
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StudentDashboard = ({ navigation }) => {
    const handleMenuPress = () => {
        console.log('Menu pressed');
        // Add functionality for the menu button
    };

    const handleProfilePress = () => {
        console.log('Profile pressed');
        // Add functionality for the profile button
    };

    return (
        <ScrollView style={styles.container}>
            {/* Navigation Bar */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={handleMenuPress}>
                    <Image
                        source={require('../images/menu.png')} // Replace with your burger menu image path
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
                <View style={styles.navCenter}>
                    <Image
                        source={require('../images/logo.png')} // Replace with your logo image path
                        style={styles.logo}
                    />
                    <Image source={require('../images/GateSync.png')} style={styles.gatesync}/>
                </View>
                <TouchableOpacity onPress={handleProfilePress}>
                    <Image
                        source={require('../images/account.png')} // Replace with your profile icon image path
                        style={styles.profileIcon}
                    />
                </TouchableOpacity>
            </View>


             <TouchableOpacity 
            onPress={() => navigation.navigate('QRCode')}
        >
            <LinearGradient 
                colors={['#6B9BFA', '#0056FF']} 
                style={styles.qrbutton}
            >
                <Image source={require('../images/QR.png')} style={styles.QRcode}/>
                <Text style={styles.scanqr}> View</Text>
                <Text style={styles.scanqr}> Your QR </Text>
                <Text style={styles.scanqr}> Code. </Text>
            </LinearGradient>
        </TouchableOpacity>


        <View style={styles.widget}>
                        <TouchableOpacity 
                style={styles.widgetbutton} 
                onPress={() => navigation.navigate('LinkParent')}
            >
                <Image source={require('../images/parent_.png')} style={styles.parent} />
                <Image source={require('../images/relationship.png')} style={styles.relationship} />
            </TouchableOpacity>
            <Image source={require('../images/arrowright.png')} style={styles.arrowright} />
            <Text style={styles.linkparent}> Link with</Text>
            <Text style={styles.linkparent}> Parents</Text>

            <View style={styles.line}/>

            <TouchableOpacity
                style={styles.widgetbutton2} 
                onPress={() => navigation.navigate('ActivityLogs')}
            >
                <Image source={require('../images/logs.png')} style={styles.logicon} />
            </TouchableOpacity>
            <Image source={require('../images/arrowleft.png')} style={styles.arrowleft} />
            <Text style={styles.logs}>Activity</Text>
            <Text style={styles.logs}>Logs</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Dashboard</Text>
            </View>
        </ScrollView>
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
    viewqr: {
        width: '90%',
        height: 61,
        borderRadius: 21,
        backgroundColor: '#6b9bfa',
        justifyContent: 'center',
        top: '-68%',
        alignSelf: 'center',
        // Shadow for iOS
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Offset for shadow
        shadowOpacity: 0.3, // Opacity of the shadow
        shadowRadius: 4, // Blur radius of the shadow
        // Shadow for Android
        elevation: 6, // Elevation level for Android
    },
    line:{
        width: '90%',
        height: 3,
        alignSelf: 'center',
        backgroundColor: '#6B9BFA',
        top: '-22%',
    },
    viewqrcode: {
        fontFamily: 'Kanit',
        fontSize: 20,
        color: '#fff',
        fontWeight: '900',
        alignSelf: 'center',
    },
    widget: {
        width: '90%',
        height: 319,
        backgroundColor: '#CFE5FF',
        marginTop: 10,
        top: '18%',
        alignSelf: 'center',
        borderRadius: 21,
        shadowColor: 'black', // Shadow color (iOS)
        shadowOffset: { width: 4, height: 2 }, // Shadow offset (iOS)
        shadowOpacity: 0.3, // Shadow opacity (iOS)
        shadowRadius: 4, // Shadow radius (iOS)
        elevation: 5, // Shadow for Android
    },
    widgetbutton: {
        width: 110,
        height: 90,
        backgroundColor: '#FFF',
        top: '9%',
        left: '7%',
        borderRadius: 21,
        shadowColor: 'black', // Shadow color (iOS)
        shadowOffset: { width: 4, height: 2 }, // Shadow offset (iOS)
        shadowOpacity: 0.3, // Shadow opacity (iOS)
        shadowRadius: 4, // Shadow radius (iOS)
        elevation: 5, // Shadow for Android
    },
    widgetbutton2: {
        width: 110,
        height: 90,
        backgroundColor: '#FFF',
        top: '-10%',
        right: '-63%',
        borderRadius: 21,
        shadowColor: 'black', // Shadow color (iOS)
        shadowOffset: { width: 4, height: 2 }, // Shadow offset (iOS)
        shadowOpacity: 0.3, // Shadow opacity (iOS)
        shadowRadius: 4, // Shadow radius (iOS)
        elevation: 5, // Shadow for Android
    },
    parent:{
        width: 60,
        height: 40,
        right: '-15%',
        top: '30%',
    },
    logicon:{
        width: 65,
        height: 63,
        right: '-20%',
        top: '15%',
    },
    relationship:{
        width: 31,
        height: 25.59,
        right: '-50%',
        top: '-30%',
    },
    arrowright:{
        width: 87.5,
        height: 82.49,
        right: '-35%',
        top: '-18%',
    },
    arrowleft:{
        width: 87.5,
        height: 82.49,
        right: '-35%',
        top: '-35%',
    },
    linkparent:{
        color: '#2488E5',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: 3,
        fontFamily: 'Kanit',
        fontWeight: '900',
        right: '-55%',
        top: '-40%',
    },
    logs:{
        color: '#2488E5',
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: 3,
        fontFamily: 'Kanit',
        fontWeight: '900',
        right: '-7%',
        top: '-58%',
    },
    qrbutton:{
        width: '90%',
        height: 170,
        borderRadius:21 ,
        alignSelf: 'center',
        top: '55%',
        shadowColor: 'black', // Shadow color (iOS)
        shadowOffset: { width: 4, height: 2 }, // Shadow offset (iOS)
        shadowOpacity: 0.3, // Shadow opacity (iOS)
        shadowRadius: 4, // Shadow radius (iOS)
        elevation: 5, // Shadow for Android
    },
    QRcode:{
        width: 216.68,
        height: 197.77,
        left: '40%',
        top: '-30%',
    },
    scanqr:{
        fontSize: 25,
        fontFamily: 'Martian Mono',
        color: '#fff',
        fontWeight: 'bold',
        top: '-100%',
        left: '8%',
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
    menuIcon: {
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
        bottom: 530,
    },
});

export default StudentDashboard;
