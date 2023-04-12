import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";


interface MapProps {
  longLat: { lat: number; lng: number }
}

const Map: React.FC<MapProps> = ({ longLat }) => {
    const customMarker = new L.Icon({
        iconUrl: '/src/assets/images/icon-location.svg',
        iconSize: [15, 25]
      });

      const mapKey = `${longLat.lat}`

  return (
    <div className="h-full w-full">
        <MapContainer key={mapKey} center={[longLat.lat, longLat.lng]} zoom={13} style={{ height: "100%", width: '100%' }} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="..."
      />
      <Marker position={[longLat.lat, longLat.lng]} icon={customMarker}>
        <Popup>
          Here
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );

};

export default Map;





