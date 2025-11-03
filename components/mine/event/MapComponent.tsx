"use client";

import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css"; // ✅ Importá el CSS de forma estática aquí

// ✅ Carga dinámica del mapa SIN SSR (evita "window is not defined")
const MapWithNoSSR = dynamic(
  async () => {
    const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");
    const L = await import("leaflet");

    // 🔧 Corrección de íconos rotos de Leaflet en Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    // 🔹 Coordenadas del Domo del Centenario
    const markerPosition: [number, number] = [-27.455, -58.9872];

    // Retornamos el componente del mapa
    return function MapComponent() {
      return (
        <div className="w-full h-full rounded-xl overflow-hidden">
          <MapContainer
            center={markerPosition}
            zoom={16}
            scrollWheelZoom={false}
            className="w-full h-full rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={markerPosition}>
              <Popup>Domo del Centenario — Av. de los Inmigrantes 300</Popup>
            </Marker>
          </MapContainer>
        </div>
      );
    };
  },
  { ssr: false }
);

export default function Map() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <MapWithNoSSR />
    </div>
  );
}
