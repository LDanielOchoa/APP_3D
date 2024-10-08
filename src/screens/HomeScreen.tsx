import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a la Aplicación</Text>
      <Button title="Iniciar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomeScreen;
