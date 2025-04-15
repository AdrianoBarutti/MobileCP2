import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Image, Picker } from 'react-native';

export default function FormRec() {
  const formatarData = (valor) => {
    // Remove tudo que não é número
    const numeros = valor.replace(/\D/g, '');

    // Aplica a máscara DD-MM-YYYY
    let formatado = '';
    if (numeros.length <= 2) {
      formatado = numeros;
    } else if (numeros.length <= 4) {
      formatado = `${numeros.slice(0, 2)}-${numeros.slice(2)}`;
    } else {
      formatado = `${numeros.slice(0, 2)}-${numeros.slice(2, 4)}-${numeros.slice(4, 8)}`;
    }

    return formatado;
  };

  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    horario: '',
    dia: '', // já incluso
    tipoLixo: '',
  });

  const [formEnviado, setFormEnviado] = useState(false);

  const handleChange = (field, value) => {
    if (field === 'dia') {
      value = formatarData(value);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Verifica se algum campo está vazio
    if (!formData.nome || !formData.endereco || !formData.horario || !formData.dia || !formData.tipoLixo) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se o horário está no formato HH:mm
    if (!/^\d{2}:\d{2}$/.test(formData.horario)) {
      Alert.alert('Erro', 'Por favor, insira um horário válido no formato HH:mm.');
      return;
    }

    // Verifica se a data está no formato DD-MM-YYYY
    if (!/^\d{2}-\d{2}-\d{4}$/.test(formData.dia)) {
      Alert.alert('Erro', 'Por favor, insira uma data válida no formato DD-MM-YYYY.');
      return;
    }

    setFormEnviado(true);
    console.log('Dados enviados:', formData);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/fm-cont.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Formulário de Reciclagem</Text>

      {!formEnviado ? (
        <View style={styles.form}>
          {renderInputLabel('Nome', 'nome', formData.nome, handleChange)}
          {renderInputLabel('Endereço', 'endereco', formData.endereco, handleChange)}
          {renderInputLabel('Horário de Coleta', 'horario', formData.horario, handleChange, 'numeric')}
          {renderInputLabel('Data da Coleta', 'dia', formData.dia, handleChange, 'numeric')}
          {renderPickerLabel('Tipo de Lixo', 'tipoLixo', formData.tipoLixo, handleChange)}
          <Button title="Enviar" onPress={handleSubmit} color="#418B4F" />
        </View>
      ) : (
        <View style={styles.confirmation}>
          <Text style={styles.successMessage}>✅ Formulário enviado com sucesso!</Text>
          <Image
            source={require('../../assets/agradecimentoImagem.png')} // Caminho para sua imagem
            style={styles.successImage}
          />
        </View>
      )}
    </View>
  );
}

const renderInputLabel = (label, field, value, onChange, keyboardType = 'default') => (
  <View style={styles.inputContainer} key={field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={(text) => onChange(field, text)}
      keyboardType={keyboardType}
      placeholder={`Digite o ${label.toLowerCase()}`}
    />
  </View>
);

const renderPickerLabel = (label, field, value, onChange) => (
  <View style={styles.inputContainer} key={field}>
    <Text style={styles.label}>{label}</Text>
    <Picker
      selectedValue={value}
      onValueChange={(itemValue) => onChange(field, itemValue)}
      style={styles.input}
    >
      <Picker.Item label="Selecione" value="" />
      <Picker.Item label="Plástico" value="Plástico" />
      <Picker.Item label="Papel" value="Papel" />
      <Picker.Item label="Vidro" value="Vidro" />
      <Picker.Item label="Metal" value="Metal" />
      <Picker.Item label="Orgânico" value="Orgânico" />
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#418B4F',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  confirmation: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successMessage: {
    fontSize: 18,
    color: '#418B4F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successImage: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
});