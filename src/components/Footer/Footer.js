import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Footer.styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.tabText}>Inicio</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.emoji}>📁</Text>
        <Text style={styles.tabText}>Documentos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.emoji}>🔧</Text>
        <Text style={styles.tabText}>Herramientas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.emoji}>📋</Text>
        <Text style={styles.tabText}>Historial</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;