import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 


import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={{
          
          tabBarActiveTintColor: '#e91e63', 
          tabBarInactiveTintColor: '#aEaEaE', 
          
          tabBarStyle: {
            backgroundColor: '#1c1c1c', 
            paddingTop: 5,            
            height: 60,                
            borderTopWidth: 0,         
            
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 5, 
          },

          
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            paddingBottom: 5, 
          },

          
          headerStyle: {
            backgroundColor: '#1c1c1c', 
          },
          headerTintColor: '#ffffff', 
        }}
      >
        {/* --- LAYAR PERTAMA --- */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Beranda',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        
        {/* --- LAYAR KEDUA (DENGAN GAYA KHUSUS) --- */}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Pengaturan',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-sharp" size={size} color={color} />
            ),
            
           
            tabBarBadge: 3, 
            tabBarBadgeStyle: { backgroundColor: '#e91e63', color: '#fff' },
            
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}