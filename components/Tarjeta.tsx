import { View } from 'react-native';
import React from 'react';
import { styles } from '../styles/ComponentesStyles';

export default function Tarjeta({ children }: any) {
  return <View style={styles.tarjeta}>{children}</View>;
}
