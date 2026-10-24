import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/ComponentesStyles';

export default function Boton({ titulo, onPress, cargando }: any) {
  let contenido = <Text style={styles.textoBoton}>{titulo}</Text>;
  if (cargando) {
    contenido = <ActivityIndicator color="#fff" />;
  }

  return (
    <TouchableOpacity style={styles.boton} onPress={onPress} disabled={cargando}>
      {contenido}
    </TouchableOpacity>
  );
}
