import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { obtenerClima } from '../services/clima';
import { styles } from '../styles/TarjetaDestinoStyles';

export default function TarjetaDestino({ destino, onEliminar }: any) {
  const [clima, setclima] = useState<any>(null);
  const [error, seterror] = useState('');

  async function cargarClima() {
    try {
      const datos = await obtenerClima(destino.ciudad);
      if (datos.main) {
        setclima(datos);
      } else {
        seterror('No se encontro el clima de esta ciudad');
      }
    } catch (e) {
      seterror('No se pudo cargar el clima');
    }
  }

  useEffect(() => {
    cargarClima();
  }, []);

  let contenido;
  if (error !== '') {
    contenido = <Text style={styles.error}>{error}</Text>;
  } else if (clima === null) {
    contenido = <ActivityIndicator color="#2F80ED" />;
  } else {
    contenido = (
      <View>
        <Text style={styles.temperatura}>{clima.main.temp}°C</Text>
        <Text style={styles.descripcion}>{clima.weather[0].description}</Text>
      </View>
    );
  }

  return (
    <View style={styles.tarjeta}>
      <View style={styles.fila}>
        <View style={styles.info}>
          <Text style={styles.ciudad}>{destino.ciudad}</Text>
          <Text style={styles.pais}>{destino.pais}</Text>
          <Text style={styles.coords}>Lat {destino.lat} - Lon {destino.lon}</Text>
        </View>
        <TouchableOpacity style={styles.botonEliminar} onPress={onEliminar}>
          <Text style={styles.eliminar}>Eliminar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.climaCaja}>{contenido}</View>
    </View>
  );
}
