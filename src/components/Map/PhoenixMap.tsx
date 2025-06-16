import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const PhoenixMap = () => {
  const mfcLocations = [
    { lat: 33.4484, lng: -112.0740, name: "MFC Downtown" },
    { lat: 33.4545, lng: -112.0680, name: "MFC Zone 2" },
  ];

  return (
    <MapContainer center={[33.4484, -112.0740]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {mfcLocations.map((mfc) => (
        <CircleMarker key={mfc.name} center={[mfc.lat, mfc.lng]} radius={10}>
          <Popup>{mfc.name}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default PhoenixMap;