import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


export default function HomeScreen({ navigation }) {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* --- Judul Halaman --- */}
        <Text style={styles.headerTitle}>Beranda</Text>
        <Text style={styles.subTitle}>Selamat datang kembali!</Text>

        {/* --- Kartu (Card) --- */}
        <View style={styles.card}>
          <Ionicons name="sparkles" size={24} color="#e91e63" />
          <Text style={styles.cardTitle}>Fitur Baru</Text>
          <Text style={styles.cardText}>
            Lihat tampilan baru aplikasi kita dengan mode gelap yang lebih nyaman
            di mata.
          </Text>
          
          {/* --- Tombol dengan warna senada --- */}
          <TouchableOpacity style={styles.pinkButton}>
            <Text style={styles.pinkButtonText}>Pelajari Lebih Lanjut</Text>
          </TouchableOpacity>
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
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    color: '#aEaEaE', 
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1c1c1c', 
    borderRadius: 15,
    padding: 20,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#b0b0b0',
    marginTop: 5,
    lineHeight: 20,
  },
  pinkButton: {
    backgroundColor: '#e91e63', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  pinkButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});