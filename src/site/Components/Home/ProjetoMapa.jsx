import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configura ícone padrão do Leaflet para resolver problemas com ícones em React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Ícone personalizado para Alexandra
const alexandraIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // URL da imagem do ícone
  iconSize: [32, 32], // Tamanho do ícone
  iconAnchor: [16, 32], // Ponto do ícone que ficará na coordenada
  popupAnchor: [0, -32], // Posição do popup em relação ao ícone
});

// Ícone personalizado para o Centro
const centroIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // URL da imagem do ícone
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ProjetoMapa = () => {
  // Coordenadas para os pontos
  const alexandraCoords = [-25.55493646824634, -48.62533253971992]; // Alexandra, PR
  const centroCoords = [-25.515456831545528, -48.52381433981699]; // Centro Histórico de Paranaguá, PR

  return (
    <div style={{ display: 'flex' }}>
      {/* Div do Mapa */}
      <div style={{ height: '500px', width: '60%' }}>
        <MapContainer
          center={[-25.5481, -48.6319]} // Coordenadas centrais
          zoom={12}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Camada do mapa */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marcador para Alexandra */}
          <Marker position={alexandraCoords} icon={alexandraIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <b style={{ fontSize: '16px', color: '#0066cc' }}>Alexandra</b>
                <p>Bairro com projetos esportivos em Paranaguá. <a
                  href="https://www.google.com/maps/place/Campo+de+Futebol+de+Alexandra/@-25.5273418,-48.5215688,9342m/data=!3m1!1e3!4m6!3m5!1s0x94db8586655faa89:0x49564116b8fe0dbd!8m2!3d-25.5548155!4d-48.6253379!16s%2Fg%2F11h0mqfs7v?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0066cc', textDecoration: 'none' }}
                >
                 Saiba mais
                </a>
                </p>
                <img
                  src="/Images/image11.png"
                  alt="Alexandra"
                  style={{ width: '100px', borderRadius: '8px' }}
                />
                
              </div>
            </Popup>
          </Marker>

          {/* Marcador para o Centro Histórico */}
          <Marker position={centroCoords} icon={centroIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <b style={{ fontSize: '16px', color: '#cc6600' }}>Centro Histórico</b>
                <p>Local turístico e cultural.</p>
                <a
                  href="https://www.google.com/maps/place/Paranagu%C3%A1,+PR/@-25.5595612,-48.582748,15707m/data=!3m1!1e3!4m15!1m8!3m7!1s0x94db9a9f47a5c1d3:0xcb6eebd1d18fb8e1!2zUGFyYW5hZ3XDoSwgUFI!3b1!8m2!3d-25.5151683!4d-48.522417!16s%2Fg%2F11bc625g31!3m5!1s0x94db9a9f47a5c1d3:0xcb6eebd1d18fb8e1!8m2!3d-25.5151683!4d-48.522417!16s%2Fg%2F11bc625g31?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0066cc', textDecoration: 'none' }}
                >
                  Saiba mais
                </a>
              </div>
            </Popup>
          </Marker>

          {/* Linha entre Alexandra e o Centro */}
          <Polyline
            positions={[alexandraCoords, centroCoords]}
            color="blue"
            weight={4} // Largura da linha
            dashArray="10, 5" // Traçado pontilhado
          >
            <Popup>Distância aproximada: 19 km</Popup>
          </Polyline>
        </MapContainer>
      </div>

      {/* Div com as Informações do Projeto */}
      <div style={{ width: '40%', padding: '20px', backgroundColor: '#e8f5ff' }}>
        <h2>Conheça um Pouco Onde Nosso Projeto Se Localiza</h2>
        <p>
          Alexandra, bairro mais distante do Centro de Paranaguá-PR, onde se encontram
          a maioria dos Projetos Esportivos Oferecidos. Um bairro grande com mais de
          3.587 moradores (IBGE, 2010), localidades de vulnerabilidade social, onde
          juntos poderemos contribuir no desenvolvimento de muitos futuros cidadãos
          brasileiros por meio deste projeto.
        </p>
      </div>
    </div>
  );
};

export default ProjetoMapa;
