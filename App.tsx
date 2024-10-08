import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/CuestionarioScreen';
import LoginScreen from './src/screens/HomeScreen';
import OpcionesScreen from './src/screens/OpcionesScreen';
import Render3DScreen from './src/screens/Render3D';
import CuestionarioScreen from './src/screens/CuestionarioScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Opciones" component={OpcionesScreen} />
        <Stack.Screen name="Render3D" component={Render3DScreen} />
        <Stack.Screen name="Cuestionario" component={CuestionarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
