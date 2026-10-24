import { Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/ComponentesStyles';

export default function MensajeError({ texto }: any) {
  if (texto === '') {
    return null;
  }
  return <Text style={styles.error}>{texto}</Text>;
}
