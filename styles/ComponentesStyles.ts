import { StyleSheet } from 'react-native';
import { colores } from './colores';

export const styles = StyleSheet.create({
  campo: { marginBottom: 14 },
  etiqueta: { fontSize: 14, fontWeight: 'bold', color: colores.texto, marginBottom: 6 },
  input: {
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  boton: {
    backgroundColor: colores.primario,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  textoBoton: { color: colores.blanco, fontSize: 16, fontWeight: 'bold' },
  error: {
    backgroundColor: colores.errorFondo,
    color: colores.error,
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
});
