import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PropertyMap() {
  const position = [18.5204, 73.8567]; // Pune

  return (
    <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Property Location Map</h2>
      <div className="h-[400px] rounded-2xl overflow-hidden">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Sample Property Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}