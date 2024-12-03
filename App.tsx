/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './components/SplashScreen';
import GetStartedScreen from './components/GetStarted';
import LoginOption from './components/LoginOption';
import StudentLogin from './components/StudentLogin';
import StudentSignup from './components/StudentSignup';
import ParentLogin from './components/ParentLogin';
import ParentSignup from './components/ParentSignup';
import StudentPage from './components/StudentPage';
import MessagesScreen from './components/MessagesScreen';
import UpdatesScreen from './components/UpdateScreen';
import QRCode from './components/QRCode';
import { Image, View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StudentPageTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let imageSource;

        if (route.name === 'Home') {
          imageSource = focused
            ? require('./images/home(3).png') // Active image for Home
            : require('./images/home(2).png'); // Inactive image for Home
        } else if (route.name === 'Messages') {
          imageSource = focused
            ? require('./images/customer1.png') // Active image for Messages
            : require('./images/customer2.png'); // Inactive image for Messages
        } else if (route.name === 'Updates') {
          imageSource = focused
            ? require('./images/bell.png') // Active image for Updates
            : require('./images/bell1.png'); // Inactive image for Updates
        }

        return (
          <View
            style={{
              width: 64,  // Rectangle width
              height: 32, // Rectangle height
              backgroundColor: focused ? '#BCE5FF' : 'transparent', // Background color when active
              borderRadius: 16, // Rounded corners
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={imageSource}
              style={{
                width: 20,  // Adjust width of image inside the rectangle
                height: 20, // Adjust height of image inside the rectangle
                resizeMode: 'contain', // Makes the image maintain aspect ratio
              }}
            />
          </View>
        );
      },
      tabBarActiveTintColor: '#ffffff', // Active icon color (white)
      tabBarInactiveTintColor: '#d3d3d3', // Inactive icon color (light gray)
      tabBarStyle: {
        backgroundColor: '#5FA7FF',  // Background color for the tab bar
        borderTopLeftRadius: 20, // Optional: rounded corners
        borderTopRightRadius: 20, // Optional: rounded corners
        height: 60, // Adjust tab bar height if needed
      },
      headerShown: false, // Hide headers for tab screens
    })}
  >
    <Tab.Screen name="Home" component={StudentPage} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
    <Tab.Screen name="Updates" component={UpdatesScreen} />
  </Tab.Navigator>
);


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash screen route */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Get Started"
          component={GetStartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginOption"
          component={LoginOption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentLogin"
          component={StudentLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentSignup"
          component={StudentSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ParentLogin"
          component={ParentLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ParentSignup"
          component={ParentSignup}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="QRCode"
          component={QRCode}
          options={{ headerShown: false }}
        />
        {/* StudentPage with bottom tabs */}
        <Stack.Screen
          name="StudentPage"
          component={StudentPageTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
