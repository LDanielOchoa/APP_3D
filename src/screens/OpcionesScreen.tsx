import React from 'react';
import { View, Button } from 'react-native';

const OpcionesScreen = ({ navigation }) => {
  const handleOption = (opcion) => {
    navigation.navigate('Render3D', { opcion });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Opción 1: Vehículo 1" onPress={() => handleOption(1)} />
      <Button title="Opción 2: Vehículo 2" onPress={() => handleOption(2)} />
      <Button title="Opción 3: Vehículo 3" onPress={() => handleOption(3)} />
    </View>
  );
};

export default OpcionesScreen;
