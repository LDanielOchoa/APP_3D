import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const CuestionarioScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate('FinalScreen');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Controller
        control={control}
        name="pregunta1"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Pregunta 1"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
          />
        )}
      />
      <Controller
        control={control}
        name="pregunta2"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Pregunta 2"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
          />
        )}
      />
      <Controller
        control={control}
        name="pregunta3"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Pregunta 3"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
          />
        )}
      />
      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CuestionarioScreen;
