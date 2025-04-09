import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatosUteisScreen() {
  return (
    <View style={styles.container}>
      <Text>Contatos Úteis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});
