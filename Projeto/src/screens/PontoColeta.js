import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PontoColeta() {
  return (
    <View style={styles.container}>
      <Text>Locais de Ajuda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});
