import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Tarjeta from '../components/Tarjeta';
import Campo from '../components/Campo';
import Boton from '../components/Boton';
import MensajeError from '../components/MensajeError';
import { styles } from '../styles/ScreensStyles';

export default function LoginScreen() {
  const [correo, setcorreo] = useState('');
  const [clave, setclave] = useState('');
  const [error, seterror] = useState('');
  const [cargando, setcargando] = useState(false);

  async function Ingresar() {
    if (correo === '' || clave === '') {
      seterror('Ingresa tu correo y contraseña');
      return;
    }
    seterror('');
    setcargando(true);
    try {
      await signInWithEmailAndPassword(auth, correo, clave);
    } catch (e) {
      seterror('Correo o contraseña incorrectos o no hay conexion');
    }
    setcargando(false);
  }

  return (
    <View style={styles.containerCentro}>
      <Text style={styles.titulo}>TravelWeather</Text>
      <Tarjeta>
        <MensajeError texto={error} />
        <Campo etiqueta="Correo" placeholder="tucorreo@gmail.com" value={correo} onChangeText={setcorreo} />
        <Campo etiqueta="Contraseña" placeholder="******" value={clave} onChangeText={setclave} secureTextEntry />
        <Boton titulo="Iniciar sesión" onPress={Ingresar} cargando={cargando} />
      </Tarjeta>
    </View>
  );
}
