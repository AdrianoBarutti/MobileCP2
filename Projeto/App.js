import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LocaisAjudaScreen from './src/screens/PontoColeta';
import ContatosUteisScreen from './src/screens/ComoReciclar';
import FormularioScreen from './src/screens/FormRec';
import DesenvolvedoresScreen from './src/screens/Desenvolvedores';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ReciclaTec</Text>
      <Text style={styles.subtitle}>Transformando resíduos em oportunidades</Text>

      <View style={styles.bannerContainer}>
        <TouchableOpacity 
          style={styles.banner} 
          onPress={() => navigation.navigate('LocaisAjuda')}
        >
          <Text style={styles.bannerText}>Pontos de Coleta</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.banner} 
          onPress={() => navigation.navigate('ContatosUteis')}
        >
          <Text style={styles.bannerText}>Como Reciclar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.banner} 
          onPress={() => navigation.navigate('Formulario')}
        >
          <Text style={styles.bannerText}>Formulário de Doação</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.banner} 
          onPress={() => navigation.navigate('Desenvolvedores')}
        >
          <Text style={styles.bannerText}>Sobre os Desenvolvedores</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#185a9d' }, // Fundo azul escuro no header
          headerTintColor: '#fff', // Texto branco no header
          headerTitleStyle: { fontWeight: 'bold' }, // Título em negrito no header
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen name="LocaisAjuda" component={LocaisAjudaScreen} options={{ title: 'Locais de Ajuda' }} />
        <Stack.Screen name="ContatosUteis" component={ContatosUteisScreen} options={{ title: 'Contatos Úteis' }} />
        <Stack.Screen name="Formulario" component={FormularioScreen} options={{ title: 'Formulário de Doação' }} />
        <Stack.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} options={{ title: 'Desenvolvedores' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fundo branco
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#185a9d',
    textAlign: 'center',
  },
});
