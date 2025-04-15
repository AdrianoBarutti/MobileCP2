import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ComoReciclar({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Seta para baixo */}
      <Image
        source={require('../../assets/setadown.png')}
        style={styles.arrow}
      />

      <Text style={styles.title}>COMO RECICLAR?</Text>
      <Text style={styles.subtitle}>Veja abaixo passo a passo</Text>
      <View style={styles.divider} />

      {/* Passo 01 */}
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepNumber}>01</Text>
          <Text style={styles.stepTitle}>Separe os resíduos</Text>
        </View>
        <Text style={styles.stepDescription}>
          O primeiro passo para a reciclagem eficiente começa em casa, separando o lixo em dois principais grupos: comum e reciclável.
          Para isso, você precisará de pelo menos duas lixeiras, identificadas claramente para evitar misturas.
        </Text>
        <Image
          source={require('../../assets/TiposDeLixo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.divider} />

      {/* Passo 02 */}
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepNumber}>02</Text>
          <Text style={styles.stepTitle}>Limpe os materiais recicláveis</Text>
        </View>
        <Text style={styles.stepDescription}>
          O segundo passo é a limpeza dos recicláveis. A ideia é sempre tentar retirar sobras de comida, de líquidos ou de produtos de limpeza.
          Descartar de qualquer jeito pode contaminar outros materiais e inviabilizar a reciclagem.
          Atenção! O importante é o material reciclável estar seco!
        </Text>
        {/* Imagem adicionada abaixo do segundo passo */}
        <Image
          source={require('../../assets/LvndLixo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.divider} />

      {/* Passo 03 */}
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepNumber}>03</Text>
          <Text style={styles.stepTitle}>Compacte os recicláveis</Text>
        </View>
        <Text style={styles.stepDescription}>
          O último passo é compactar os resíduos e diminuir ao máximo seu volume. Assim, você economiza e ganha espaço. Amasse as latas, tire o ar das garrafas plásticas,
          desmonte e dobre as embalagens tetrapack e de papel.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
    alignItems: 'center',
  },
  arrow: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 0,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#418B4F',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 23,
    color: '#418B4F',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  stepContainer: {
    marginBottom: 30,
    width: '90%',
    backgroundColor: '#F0F0F0',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  stepNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#418B4F',
    marginRight: 10,
  },
  stepTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#4c4c55',
    textAlign: 'center',
  },
  stepDescription: {
    fontSize: 16,
    color: 'rgb(56, 56, 56)',
    lineHeight: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 3,
    backgroundColor: '#418B4F',
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
});
