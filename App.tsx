import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import CustomImage from './components/CustomImage';
const medica = require('./assets/medica.png');
const balanca = require('./assets/balanca.png');

export default function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');

  function handleSubmit() {
    let msg = '';
    const alt = parseFloat(altura) / 100; // Converter altura para número
    const imc = parseFloat(peso) / (alt * alt); // Calcular IMC
  
    if (isNaN(alt) || isNaN(peso) || imc <= 0) {
      Speech.speak(
        'Dados incorretos! Por favor, preencha os campos corretamente. Exemplo: Peso 70 (Kg), Altura 175 (cm)',
        { language: 'pt-BR' }
      );
      Alert.alert(
        'Dados incorretos!',
        'Por favor, preencha os campos corretamente. Exemplo: Peso 70 (Kg), Altura 175 (cm)'
      );
    } else if (imc < 18.5) {
      msg = 'Você está abaixo do peso! Seu IMC é ' + imc.toFixed(2);
      Speech.speak(msg, { language: 'pt-BR' });
      Alert.alert(msg);
    } else if (imc >= 18.5 && imc < 24.9) {
      msg = 'Você está com o peso saudável! Seu IMC é ' + imc.toFixed(2);
      Speech.speak(msg, { language: 'pt-BR' });
      Alert.alert(msg);
    } else if (imc >= 25 && imc < 29.9) {
      msg = 'Você está sobrepeso! Seu IMC é ' + imc.toFixed(2);
      Speech.speak(msg, { language: 'pt-BR' });
      Alert.alert(msg);
    } else if (imc >= 30 && imc < 34.9) {
      msg = 'Você está com obesidade grau 1! Seu IMC é ' + imc.toFixed(2);
      Speech.speak(msg, { language: 'pt-BR' });
      Alert.alert(msg);
    } else if (imc >= 35 && imc < 39.9) {
      msg = 'Você está com obesidade grau 2! Seu IMC é ' + imc.toFixed(2);
      Speech.speak(msg, { language: 'pt-BR' });
      Alert.alert(msg);
    } else {
      msg = 'Você está com obesidade grau 3! Seu IMC é ' + imc.toFixed(2);
      Speech.speak(msg, { language: 'pt-BR' });
      Alert.alert(msg);
    }
  }
  

  function handleClear() {
    setAltura('');
    setPeso('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <StatusBar style="auto" />
        <Text style={styles.titulo}>Cálculo de IMC</Text>
        <CustomImage title="IMC" image={medica} width={150} height={150} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={altura}
            onChangeText={setAltura}
            placeholder="Altura (cm)"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={setPeso}
            placeholder="Peso (Kg)"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <CustomImage title="IMC" image={balanca} width={150} height={150} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#E59200',
    borderColor: '#AD6200',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    color: '#FFF',
    fontSize: 23,
    width: 200, // Defina o tamanho desejado para os campos de entrada
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E59200',
    marginHorizontal: 30,
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    width: 200, // Defina o tamanho desejado para os botões
  },
  titulo: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8D4600',
  },
  buttonText: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
