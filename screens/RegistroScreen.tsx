import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Tarjeta from '../components/Tarjeta';
import Campo from '../components/Campo';
import Boton from '../components/Boton';
import MensajeError from '../components/MensajeError';
import { styles } from '../styles/ScreensStyles';

export default function RegistroScreen() {
  const [correo, setcorreo] = useState('');
  const [clave, setclave] = useState('');
  const [error, seterror] = useState('');
  const [cargando, setcargando] = useState(false);

  async function Registrar() {
    if (correo === '' || clave === '') {
      seterror('Completa todos los campos');
      return;
    }
    seterror('');
    setcargando(true);
    try {
      await createUserWithEmailAndPassword(auth, correo, clave);
    } catch (e) {
      seterror('No se pudo registrar, revisa los datos o tu conexion');
    }
    setcargando(false);
  }

  return (
    <View style={styles.containerCentro}>
      <Text style={styles.titulo}>Crear cuenta</Text>
      <Tarjeta>
        <MensajeError texto={error} />
        <Campo etiqueta="Correo" placeholder="tucorreo@gmail.com" value={correo} onChangeText={setcorreo} />
        <Campo etiqueta="Contraseña" placeholder="Minimo 6 caracteres" value={clave} onChangeText={setclave} secureTextEntry />
        <Boton titulo="Registrarme" onPress={Registrar} cargando={cargando} />
      </Tarjeta>
    </View>
  );
}
