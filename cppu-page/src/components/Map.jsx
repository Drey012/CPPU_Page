import dynamic from 'next/dynamic';
import styles from '../styles/Map.module.css';

// Carrega o componente Map dinamicamente apenas no lado do cliente
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => {
    const { MapContainer, TileLayer, Marker, Popup } = mod;

    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      // Imagem do marcador
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    return function Map({ center, zoom }) {
      return (
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '80%', margin: '0 auto' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            {/* Adiciona popup ao marcador */}
            <Popup>UNIFESP Guarulhos</Popup>
          </Marker>
        </MapContainer>
      );
    };
  }),
  {
    ssr: false // Desativa renderização no lado do servidor
  }
);

const Map = () => {
  return (
    <div id="map" className={styles.map}>
      <MapContainer
        center={[-23.4398490, -46.4046167]}
        zoom={15}
      />
    </div>
  );
};

export default Map;