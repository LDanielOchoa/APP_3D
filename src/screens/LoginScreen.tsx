import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [codigo, setCodigo] = useState('');

  const handleLogin = () => {
    if (/^\d+$/.test(codigo)) { // Valida si solo son números
      navigation.navigate('Opciones');
    } else {
      Alert.alert('Error', 'Por favor, ingresa solo números.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Ingrese su código"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, width: 200 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
