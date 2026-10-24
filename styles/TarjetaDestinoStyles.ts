import { StyleSheet } from 'react-native';
import { colores } from './colores';

export const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  fila: { flexDirection: 'row', alignItems: 'center' },
  info: { flex: 1 },
  ciudad: { fontSize: 20, fontWeight: 'bold', color: colores.texto },
  pais: { fontSize: 14, color: colores.textoSuave },
  coords: { fontSize: 12, color: colores.gris },
  botonEliminar: { backgroundColor: colores.errorFondo, padding: 8, borderRadius: 8 },
  eliminar: { color: colores.error, fontWeight: 'bold' },
  climaCaja: { backgroundColor: colores.fondo, borderRadius: 10, marginTop: 12, padding: 12 },
  temperatura: { fontSize: 28, fontWeight: 'bold', color: colores.primarioOscuro },
  descripcion: { fontSize: 15, color: colores.texto },
  error: { color: colores.error },
});
