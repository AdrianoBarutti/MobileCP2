import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Inicio';
import LocaisAjudaScreen from './src/screens/Locais';
import ContatosUteisScreen from './src/screens/Contatos';
import FormularioScreen from './src/screens/FormDoacao';
import DesenvolvedoresScreen from './src/screens/Desenvolvedores';

const Stack = createNativeStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Ir para Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LocaisAjuda" component={LocaisAjudaScreen} />
        <Stack.Screen name="ContatosUteis" component={ContatosUteisScreen} />
        <Stack.Screen name="Formulario" component={FormularioScreen} />
        <Stack.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
