import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ComoReciclar() {
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
          A primeira coisa que você vai fazer é separar o lixo em dois: comum e reciclável. Portanto, você vai precisar ter duas lixeiras.
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
      </View>

      <View style={styles.divider} />

      {/* Passo 03 */}
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepNumber}>03</Text>
          <Text style={styles.stepTitle}>Compacte os recicláveis</Text>
        </View>
        <Text style={styles.stepDescription}>
          O último passo é compactar os resíduos e diminuir ao máximo seu volume. Assim, você economiza e ganha espaço. Amasse as latas, tire o ar das garrafas plásticas, desmonte e dobre as embalagens tetrapack e de papel.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  arrow: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#418B4F',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#418B4F',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: '',
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#418B4F',
    marginRight: 10,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  stepDescription: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    marginBottom: 10,
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
