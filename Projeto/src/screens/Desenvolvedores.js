import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import vitorKenzo from '../../assets/VitorKenzo.jpg';
import Adriano from '../../assets/Adriano.jpg';
import githubIcon from '../../assets/github.png'; // Ícone do GitHub
import linkedinIcon from '../../assets/linkedin.png'; // Ícone do LinkedIn

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
  },
];

export default function Desenvolvedores() {
  return (
    <ImageBackground
      source={require('../../assets/backgroud.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                    <Image source={githubIcon} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL(dev.linkedin)}>
                    <Image source={linkedinIcon} style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    // Removido o backgroundColor para que a imagem de fundo seja exibida
  },
  page: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os cards desçam para a próxima linha em telas menores
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    height: 500,
    width: 300,
    margin: 15, // Margem para separar os cards
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Torna a imagem circular, se for quadrada
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10, // Espaçamento horizontal entre os ícones
  },
});
