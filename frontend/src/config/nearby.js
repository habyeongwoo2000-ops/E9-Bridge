export const nearby = {
  demo: true,
  radiusKm: 10,
  maxResults: 20,
  categories: ['grocery', 'telecom', 'medical'],
  regions: [{ id: 'ansan', label: '안산시 · Ansan' }],
  mapUrl: (place) => 'https://map.naver.com/p/search/' + encodeURIComponent(place.address)
};
