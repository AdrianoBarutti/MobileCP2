// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Ajuda Rápida!</Text>
      <Button title="Locais de Ajuda" onPress={() => navigation.navigate('LocaisAjuda')} />
      <Button title="Contatos Úteis" onPress={() => navigation.navigate('ContatosUteis')} />
      <Button title="Fale Conosco" onPress={() => navigation.navigate('Formulario')} />
      <Button title="Desenvolvedores" onPress={() => navigation.navigate('Desenvolvedores')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
