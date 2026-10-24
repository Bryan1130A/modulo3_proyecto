import { OPENWEATHER_API_KEY } from '../firebase/config';

export async function obtenerClima(ciudad: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}
