import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LocaisAjudaScreen from './src/screens/PontoColeta';
import ContatosUteisScreen from './src/screens/ComoReciclar';
import FormularioScreen from './src/screens/FormRec';
import DesenvolvedoresScreen from './src/screens/Desenvolvedores';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <ImageBackground 
      source={require('./assets/backgroud.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo ao ReciclaTec</Text>
          <Text style={styles.subtitle}>Transformando resíduos em oportunidades</Text>

          <View style={styles.bannerContainer}>
            <TouchableOpacity 
              style={styles.banner} 
              onPress={() => navigation.navigate('LocaisAjuda')}
            >
              <Image 
                source={require('./assets/coleta.png')}
                style={styles.bannerImage}
              />
              <Text style={styles.bannerText}>Pontos de Coleta</Text>
              <Text style={styles.bannerDescription}>
                Encontre locais próximos para reciclagem e descarte responsável.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.banner} 
              onPress={() => navigation.navigate('ContatosUteis')}
            >
              <Image 
                source={require('./assets/ComReciclar.png')}
                style={styles.bannerImage}
              />
              <Text style={styles.bannerText}>Como Reciclar</Text>
              <Text style={styles.bannerDescription}>
                Descubra técnicas e dicas para reciclar corretamente seus resíduos.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.banner} 
              onPress={() => navigation.navigate('Formulario')}
            >
              <Image 
                source={require('./assets/form.png')}
                style={styles.bannerImage}
              />
              <Text style={styles.bannerText}>Formulário de Doação</Text>
              <Text style={styles.bannerDescription}>
                Preencha o formulário para contribuir e fazer a diferença.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.banner} 
              onPress={() => navigation.navigate('Desenvolvedores')}
            >
              <Image 
                source={require('./assets/Desenvolvedores.png')}
                style={styles.bannerImage}
              />
              <Text style={styles.bannerText}>Sobre os Desenvolvedores</Text>
              <Text style={styles.bannerDescription}>
                Conheça os integrantes que fizeram parte desse projeto.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle="light-content" />
      </ScrollView>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(24,90,157, 0.1)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen 
          name="LocaisAjuda" 
          component={LocaisAjudaScreen} 
          options={{ title: 'Pontos de Coleta' }}
        />
        <Stack.Screen name="ContatosUteis" component={ContatosUteisScreen} options={{ title: 'Como Reciclar' }} />
        <Stack.Screen name="Formulario" component={FormularioScreen} options={{ title: 'Formulário de Doação' }} />
        <Stack.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} options={{ title: 'Desenvolvedores' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 120,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#418B4F',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#418B4F',
    marginBottom: 20,
    textAlign: 'center',
  },
  bannerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#D6E4E4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  bannerImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#418B4F',
    textAlign: 'center',
  },
  bannerDescription: {
    fontSize: 14,
    color: '#A8A8A8',
    textAlign: 'center',
    marginTop: 5,
  },
});
