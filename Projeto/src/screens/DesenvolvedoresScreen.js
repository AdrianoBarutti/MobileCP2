import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import vitorKenzo from '../../assets/VitorKenzo.jpg';
import Adriano from '../../assets/Adriano.jpg';


const developers = [
  {
    name: 'Vitor Kenzo Mizumoto',
    role: 'Desenvolvedor Back-End',
    image: vitorKenzo,
    github: 'https://github.com/vitorkenzoo',
    linkedin: 'https://www.linkedin.com/in/vitor-mizumoto-b419a6315/',
    isLocal: true,
  },
  {
    name: 'Adriano Barutti Pessuto',
    role: 'Desenvolvedor Front-End',
    image: Adriano,
    github: 'https://github.com/AdrianoBarutti',
    linkedin: 'https://www.linkedin.com/in/adriano-barutti-pessuto/',
    isLocal: true,
  }
];

export default function DesenvolvedoresScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.cardContainer}>
        {developers.map((dev, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={dev.isLocal ? dev.image : { uri: dev.image }}
              style={styles.image}
            />
            <Text style={styles.name}>{dev.name}</Text>
            <Text style={styles.role}>{dev.role}</Text>
            <View style={styles.links}>
              <TouchableOpacity onPress={() => Linking.openURL(dev.github)}>
                <Text style={styles.linkText}>GitHub</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(dev.linkedin)}>
                <Text style={[styles.linkText, { color: '#000' }]}>LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    height: 500,
    width: 300,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  role: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  linkText: {
    color: '#000',
    fontSize: 16,
  },
});
