const radians = (degrees) => degrees * Math.PI / 180;

function distanceKm(origin, place) {
  const a = Math.sin(radians(place.lat - origin.lat) / 2) ** 2
    + Math.cos(radians(origin.lat)) * Math.cos(radians(place.lat))
    * Math.sin(radians(place.lng - origin.lng) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(Math.min(1, a)));
}

export function findPlaces(places, settings, category, area) {
  const candidates = places.filter((place) => place.category === category);
  if (area.position) {
    return candidates
      .map((place) => ({ ...place, distance: distanceKm(area.position, place) }))
      .filter((place) => place.distance <= settings.radiusKm)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, settings.maxResults);
  }
  return candidates.filter((place) => place.region === area.region).slice(0, settings.maxResults);
}
