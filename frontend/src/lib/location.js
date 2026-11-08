import { Geolocation } from '@capacitor/geolocation';

export async function currentPosition() {
  const { coords } = await Geolocation.getCurrentPosition({ timeout: 10000, maximumAge: 0 });
  return { lat: coords.latitude, lng: coords.longitude };
}
