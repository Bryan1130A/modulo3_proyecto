import { StyleSheet } from 'react-native';
import { colores } from './colores';

export const styles = StyleSheet.create({
  containerCentro: { flex: 1, backgroundColor: colores.fondo, justifyContent: 'center', padding: 20 },
  container: { flex: 1, backgroundColor: colores.fondo, padding: 16 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: colores.primarioOscuro, textAlign: 'center', marginBottom: 20 },
  textoSuave: { color: colores.textoSuave, textAlign: 'center', marginTop: 40, fontSize: 15 },
});
