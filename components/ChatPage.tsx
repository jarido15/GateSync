import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';

const ChatPage = ({ navigation }) => {
  const [messages, setMessages] = useState([]); // Store messages
  const [newMessage, setNewMessage] = useState(''); // Store new message input

  // Function to send a new message
  const sendMessage = () => {
    const message = newMessage.trim();

    // Only add the message if it's not empty
    if (message) {
      const newMessageObject = { id: String(messages.length), text: message }; // Ensure id is string
      console.log('Adding message:', newMessageObject); // Log the message object being added
      setMessages([...messages, newMessageObject]);
      setNewMessage(''); // Clear the input field after sending
    }
  };

  // Render each message item in the chat list
  const renderItem = ({ item }) => {
    if (!item || typeof item.text !== 'string') {
      console.warn('Invalid item in messages:', item); // Log if the message is invalid
      return null; // Do not render invalid items
    }

    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior for iOS and Android
      style={styles.container}
    >
             {/* Navigation Bar */}
             <View style={styles.navbar}>
             <TouchableOpacity onPress={() => navigation.navigate('StudentPage', { screen: 'Messages' })}>
            <Image
              source={require('../images/back.png')} // Replace with your back icon image path
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
        </View>
      {/* Chat messages list */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}  // Moved `justifyContent` here
        keyboardShouldPersistTaps="handled" // Ensures tapping outside doesn't hide the keyboard
        style={styles.chatContainer}
      />

      {/* Message Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Image source={require('../images/send.png')}/>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    left: -90,
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
    left: -100,
  },
  back: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatList: {
    paddingBottom: 20,
    justifyContent: 'flex-end',  // Moved here to fix the warning
  },
  messageContainer: {
    backgroundColor: '#5394F2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#5FA7FF',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 90,
    top: '2%'
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 2,
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    top: '-130%',
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 50,
    top: '-130%',
  },
});

export default ChatPage;
