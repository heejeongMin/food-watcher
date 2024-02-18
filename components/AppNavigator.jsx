import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { useAuth } from './AuthProvider';
import ScanScreen from '../screen/ScanScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name == 'Scan') {
            iconName = focused ? 'barcode' : 'barcode-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        "tabBarActiveTintColor": "black",
        "tabBarInactiveTintColor": "gray",
        "tabBarStyle": [
            {
                "display": "flex"
            },
              null
        ]
      })}
    >
        {!isLoggedIn && 
            <Tab.Screen
            name="Home"
            component={HomeScreen}
        />
        }
        {isLoggedIn && ([
            <Tab.Screen
            key = "Profile"
            name="Profile"
            component={ProfileScreen}
            />, 
            <Tab.Screen
            key = "Scan"
            name= "Scan"
            component={ScanScreen}
            />
         ]
        )}
    </Tab.Navigator>
  );
};

export default AppNavigator;
