import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function SettingsScreen() {
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* --- Judul Halaman --- */}
        <Text style={styles.headerTitle}>Pengaturan</Text>

        {/* --- Grup Menu 1 --- */}
        <Text style={styles.sectionTitle}>Akun</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-circle-outline" size={24} color="#aEaEaE" style={styles.menuIcon} />
          <Text style={styles.menuText}>Edit Profil</Text>
          <Ionicons name="chevron-forward" size={20} color="#aEaEaE" style={styles.menuArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="key-outline" size={24} color="#aEaEaE" style={styles.menuIcon} />
          <Text style={styles.menuText}>Ganti Password</Text>
          <Ionicons name="chevron-forward" size={20} color="#aEaEaE" style={styles.menuArrow} />
        </TouchableOpacity>

        {/* --- Grup Menu 2 (dengan Switch) --- */}
        <Text style={styles.sectionTitle}>Tampilan</Text>
        <View style={styles.menuItem}>
          <Ionicons name="moon-outline" size={24} color="#aEaEaE" style={styles.menuIcon} />
          <Text style={styles.menuText}>Mode Gelap</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#e91e63' }} 
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={() => setIsDarkMode(previousState => !previousState)}
            value={isDarkMode}
            style={styles.menuArrow}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  content: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#aEaEaE',
    marginBottom: 10,
    marginTop: 15,
  },
  menuItem: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    color: '#ffffff',
    fontSize: 16,
    flex: 1, 
  },
  menuArrow: {
   
  },
});