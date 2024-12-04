import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MessageScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false); // State to control menu modal visibility
  const slideAnim = useRef(new Animated.Value(-400)).current; // Initial position of the modal (off-screen to the left)

  const openMenu = () => {
    setMenuVisible(true); // Show the modal
    Animated.timing(slideAnim, {
      toValue: 0, // Slide into the screen from the left
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -400, // Slide back off-screen to the left
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false)); // Hide modal after animation
  };

  const navigateToPage = (page) => {
    setMenuVisible(false); // Close the menu
    navigation.navigate(page); // Navigate to the selected page
  };

  return (
    <>
      {/* Main ScrollView */}
      <ScrollView style={styles.container}>
        {/* Navigation Bar */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={openMenu}>
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
            <Image source={require('../images/GateSync.png')} style={styles.gatesync} />
          </View>
          <TouchableOpacity onPress={() => console.log('Profile pressed')}>
            <Image
              source={require('../images/account.png')} // Replace with your profile icon image path
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>


        {/* Message container */}
        <View style={styles.messagecontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatPage')}>
            <View style={styles.chatbar}/>
            <Text style={styles.chatname}>John Padilla</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chatcircle}>
              <Image
                source={require('../images/account_circle.png')}
                style={styles.chatIcon}
              />
            </View>

        <View style={styles.content}>
          <Text style={styles.welcomeText}>Messages</Text>
        </View>
      </ScrollView>

      {/* Modal for sliding menu */}
      <Modal
        visible={menuVisible}
        animationType="none" // Disable default animation
        transparent={true}
        onRequestClose={closeMenu} // Handle back button press
      >
        <View style={styles.modalContainer}>
          {/* Overlay for dismissing the modal */}
          <TouchableOpacity style={styles.overlay} onPress={closeMenu} />

          {/* Animated sliding menu */}
          <Animated.View style={[styles.slideMenu, { transform: [{ translateX: slideAnim }] }]}>
            <View style={styles.menu}>
              {/* Close button */}
              <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
                <Text style={styles.closeButtonText}> X </Text>
              </TouchableOpacity>

              {/* Menu Options */}
              <TouchableOpacity onPress={() => navigateToPage('QRCode')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>QR Code</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToPage('ActivityLogs')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Activity Logs</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToPage('LinkedParent')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Linked Parent</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Settings Pressed')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToPage('StudentLogin')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
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
    backgroundColor: '#BCE5FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messagecontainer: {
    backgroundColor: '#CFE5FF',
    width: '90%',
    height: 206,
    alignSelf: 'center',
    top: '17%',
    borderRadius: 21,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 35,
    height: 34,
    resizeMode: 'contain',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  gatesync: {
    width: 100,
    height: 34,
    top: 5,
    resizeMode: 'contain',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menuIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  navbarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileIcon: {
    width: 30,
    height: 30,
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
    top: -295,
  },
  chatIcon: {
    width: 70,
    height: 70,
    top: -5,
    right: 5,
  },
  chatcircle: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 50,
    top: -110,
    right: -40,
  },
  chatname: {
    fontFamily: 'Kanit',
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
    alignSelf: 'center',
    textAlign: 'auto',
    top: 5,
  },
  chatbar: {
    backgroundColor: '#6b9bfa',
    width: '80%',
    height: 35,
    borderRadius: 21,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    alignContent: 'center',
    top: '58%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  overlay: {
    flex: 1,
    width: '100%',
  },
  slideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    backgroundColor: '#fff',
    height: '100%',
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menu: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuOptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default MessageScreen;
