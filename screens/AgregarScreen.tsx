import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import Tarjeta from '../components/Tarjeta';
import Campo from '../components/Campo';
import Boton from '../components/Boton';
import MensajeError from '../components/MensajeError';
import { styles } from '../styles/ScreensStyles';

export default function AgregarScreen({ navigation }: any) {
  const [ciudad, setciudad] = useState('');
  const [pais, setpais] = useState('');
  const [lat, setlat] = useState('');
  const [lon, setlon] = useState('');
  const [error, seterror] = useState('');
  const [guardando, setguardando] = useState(false);

  async function Guardar() {
    if (ciudad === '' || pais === '' || lat === '' || lon === '') {
      seterror('Todos los campos son obligatorios');
      return;
    }
    seterror('');
    setguardando(true);
    try {
      const usuario: any = auth.currentUser;
      await addDoc(collection(db, 'usuarios', usuario.uid, 'destinos'), {
        ciudad: ciudad,
        pais: pais,
        lat: lat,
        lon: lon,
      });
      setciudad('');
      setpais('');
      setlat('');
      setlon('');
      alert('Destino guardado corectamente');
      navigation.navigate('Destinos');
    } catch (e) {
      seterror('No se pudo guardar, revisa tu conexion a internet');
    }
    setguardando(false);
  }

  return (
    <ScrollView style={styles.container}>
      <Tarjeta>
        <MensajeError texto={error} />
        <Campo etiqueta="Ciudad" placeholder="Ej: Cuenca" value={ciudad} onChangeText={setciudad} />
        <Campo etiqueta="País" placeholder="Ej: Ecuador" value={pais} onChangeText={setpais} />
        <Campo etiqueta="Latitud" placeholder="-2.9001" value={lat} onChangeText={setlat} />
        <Campo etiqueta="Longitud" placeholder="-79.0059" value={lon} onChangeText={setlon} />
        <Boton titulo="Guardar destino" onPress={Guardar} cargando={guardando} />
      </Tarjeta>
    </ScrollView>
  );
}
