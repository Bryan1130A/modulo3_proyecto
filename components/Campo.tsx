import { Text, TextInput, View } from 'react-native';
import React from 'react';
import { styles } from '../styles/ComponentesStyles';

export default function Campo({ etiqueta, placeholder, value, onChangeText, secureTextEntry }: any) {
  return (
    <View style={styles.campo}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
}
