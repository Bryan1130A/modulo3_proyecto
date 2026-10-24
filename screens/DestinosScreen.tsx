import { Button, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import TarjetaDestino from '../components/TarjetaDestino';
import MensajeError from '../components/MensajeError';
import { styles } from '../styles/ScreensStyles';

export default function DestinosScreen() {
  const usuario: any = auth.currentUser;
  const [destinos, setdestinos] = useState<any[]>([]);
  const [error, seterror] = useState('');

  useEffect(() => {
    onSnapshot(
      collection(db, 'usuarios', usuario.uid, 'destinos'),
      (snapshot) => {
        const lista: any[] = [];
        snapshot.forEach((d) => {
          lista.push({ id: d.id, ciudad: d.data().ciudad, pais: d.data().pais, lat: d.data().lat, lon: d.data().lon });
        });
        setdestinos(lista);
      },
      () => {
        seterror('No se pudieron cargar tus destinos, revisa tu conexion');
      }
    );
  }, []);

  async function Eliminar(id: string) {
    try {
      await deleteDoc(doc(db, 'usuarios', usuario.uid, 'destinos', id));
    } catch (e) {
      alert('No se pudo eliminar, revisa tu conexión');
    }
  }

  const tarjetas = [];
  for (let i = 0; i < destinos.length; i++) {
    const destino = destinos[i];
    tarjetas.push(
      <TarjetaDestino key={destino.id} destino={destino} onEliminar={() => Eliminar(destino.id)} />
    );
  }

  if (destinos.length === 0) {
    tarjetas.push(<Text key="vacio" style={styles.textoSuave}>Aun no tienes destinos</Text>);
  }

  return (
    <View style={styles.container}>
      <MensajeError texto={error} />
      <ScrollView>{tarjetas}</ScrollView>
      <Button title="Cerrar sesion" onPress={() => signOut(auth)} />
    </View>
  );
}
