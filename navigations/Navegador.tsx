import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import DestinosScreen from '../screens/DestinosScreen';
import AgregarScreen from '../screens/AgregarScreen';
import { opciones } from '../styles/NavegadorStyles';

const Tab = createBottomTabNavigator();

function TabsAuth() {
  return (
    <Tab.Navigator screenOptions={opciones}>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Registro" component={RegistroScreen} />
    </Tab.Navigator>
  );
}

function TabsApp() {
  return (
    <Tab.Navigator screenOptions={opciones}>
      <Tab.Screen name="Destinos" component={DestinosScreen} />
      <Tab.Screen name="Agregar" component={AgregarScreen} />
    </Tab.Navigator>
  );
}

export function Minavegador() {
  const [usuario, setusuario] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setusuario(user);
    });
  }, []);

  let pestanas = <TabsAuth />;
  if (usuario) {
    pestanas = <TabsApp />;
  }

  return (
    <NavigationContainer>
      {pestanas}
    </NavigationContainer>
  );
}
