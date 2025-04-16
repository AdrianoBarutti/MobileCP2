import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Image, 
  StyleSheet, 
  ImageBackground 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormularioDoacao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    horario: '',
    dia: '',
    tipoLixo: '',
  });

  const [formEnviado, setFormEnviado] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isValidHorario = (horario) => {
    const regex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return regex.test(horario);
  };

  const isValidData = (data) => {
    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(data)) return false;

    const [dia, mes, ano] = data.split('/');
    const diaInt = parseInt(dia, 10);
    const mesInt = parseInt(mes, 10);
    const anoInt = parseInt(ano, 10);

    const date = new Date(anoInt, mesInt - 1, diaInt);
    return (
      date.getFullYear() === anoInt &&
      date.getMonth() + 1 === mesInt &&
      date.getDate() === diaInt
    );
  };

  const isFutureDate = (data) => {
    const [dia, mes, ano] = data.split('/');
    const diaInt = parseInt(dia, 10);
    const mesInt = parseInt(mes, 10);
    const anoInt = parseInt(ano, 10);
    const date = new Date(anoInt, mesInt - 1, diaInt);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date > today;
  };

  const handleChange = (name, value) => {
    if (name === 'horario') {
      value = value.replace(/\D/g, '');
      value = value.slice(0, 4);
      if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{1,2})/, '$1:$2');
      }
    } else if (name === 'dia') {
      value = value.replace(/\D/g, '');
      if (value.length >= 5) {
        value = value.slice(0, 10);
        value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
      } else if (value.length >= 3) {
        value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
      }
      const [dia, mes, ano] = value.split('/');
      if (ano && ano.length > 4) {
        value = `${dia}/${mes}/${ano.slice(0, 4)}`;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const renderInput = (label, name, keyboardType = 'default') => {
    const feminino = ['dia', 'data'].includes(name.toLowerCase());
    const placeholderPrefix = feminino ? 'Digite a' : 'Digite o';
    const placeholder = `${placeholderPrefix} ${label.toLowerCase()}`;
    return (
      <View style={[styles.inputContainer, styles.shadowBox]} key={name}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleChange(name, text)}
          value={formData[name]}
          placeholder={placeholder}
          placeholderTextColor="#B0B7BC"
          keyboardType={keyboardType}
          selectionColor="#555555"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  };

  const renderPicker = () => {
    return (
      <View style={[styles.inputContainer, styles.shadowBox]} key="tipoLixo">
        <Picker
          selectedValue={formData.tipoLixo}
          onValueChange={(itemValue) => handleChange('tipoLixo', itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Selecione" value="" key="empty" color="#B0B7BC" />
          <Picker.Item label="Plástico" value="Plástico" key="Plástico" color="#B0B7BC" />
          <Picker.Item label="Papel" value="Papel" key="Papel" color="#B0B7BC" />
          <Picker.Item label="Vidro" value="Vidro" key="Vidro" color="#B0B7BC" />
          <Picker.Item label="Metal" value="Metal" key="Metal" color="#B0B7BC" />
          <Picker.Item label="Orgânico" value="Orgânico" key="Orgânico" color="#B0B7BC" />
        </Picker>
      </View>
    );
  };

  const handleSubmit = () => {
    const { horario, dia } = formData;
    if (!isValidHorario(horario)) {
      setErrorMessage('Por favor, insira um horário válido no formato hh:mm.');
      return;
    }
    if (!isValidData(dia)) {
      setErrorMessage('Por favor, insira uma data válida no formato dd/mm/yyyy.');
      return;
    }
    if (!isFutureDate(dia)) {
      setErrorMessage('Por favor, insira uma data futura.');
      return;
    }
    setErrorMessage('');
    setFormEnviado(true);
  };

  return (
    <ImageBackground
      source={require('../../assets/backgroud.png')}
      style={styles.background}
    >
      <View style={[styles.container, formEnviado ? styles.enviadoContainer : null]}>
        {!formEnviado ? (
          <>
            <Image
              source={require('../../assets/fm-cont.png')}
              style={styles.image}
            />
            <Text style={styles.title}>Formulário de Reciclagem</Text>
            <View style={styles.card}>
              {renderInput('Nome', 'nome')}
              {renderInput('Endereço', 'endereco')}
              {renderInput('Horário de Coleta', 'horario', 'numeric')}
              {renderInput('Data da Coleta', 'dia', 'numeric')}
              {renderPicker()}
              {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
              <View style={{ marginTop: 10 }}>
                <Button title="Enviar" onPress={handleSubmit} color="#418B4F" />
              </View>
            </View>
          </>
        ) : (
          <View style={styles.confirmation}>
            <Text style={styles.successMessage}>✅ Formulário enviado com sucesso!</Text>
            <Image
              source={require('../../assets/agradecimentoImagem.png')}
              style={styles.successImage}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  enviadoContainer: {
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#418B4F',
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    backgroundColor: 'rgba(226, 226, 226, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#B0B7BC',
    borderRadius: 6,
  },
  shadowBox: {
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  confirmation: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  successMessage: {
    fontSize: 18,
    color: '#418B4F',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  successImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  errorMessage: {
    fontSize: 14,
    color: '#FF0000',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default FormularioDoacao;
