import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FormularioScreen() {
  return (
    <View style={styles.container}>
      <Text>Formulário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});
