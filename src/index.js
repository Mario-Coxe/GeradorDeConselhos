import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import conselhos from './parts/conselhos'
import styles from './styles/styles';

const App = () => {
    const [percentage, setPercentage] = useState('');
    const [randomAdvice, setRandomAdvice] = useState('');
  
    const handleGenerateAdvice = () => {
      const randomPercentage = parseInt(percentage, 10);
      if (isNaN(randomPercentage) || randomPercentage < 0 || randomPercentage > 100) {
        setRandomAdvice('Por favor, digite uma porcentagem válida (entre 0 e 100).');
      } else {
        const randomNumber = Math.random() * 100;
        if (randomNumber <= randomPercentage) {
          const randomIndex = Math.floor(Math.random() * conselhos.length);
          setRandomAdvice(conselhos[randomIndex]);
        } else {
          setRandomAdvice('Sem conselho para você neste momento.');
        }
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma porcentagem"
            keyboardType="numeric"
            value={percentage}
            onChangeText={text => setPercentage(text)}
          />
          <Button title="Gerar Conselho" onPress={handleGenerateAdvice} />
        </View>
        <Text style={styles.adviceText}>{randomAdvice}</Text>
      </SafeAreaView>
    );
  };  
  export default App;