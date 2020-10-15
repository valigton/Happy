import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import api from '../services/api'

import '../styles/pages/orphanage-map.css';

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

export default function OrphanageMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    });
  }, []);

  return (
    <div id="page-map">
      <Map 
        center={[-23.5707247,-46.4854789]}
        zoom={15}
        style={{ width: '100%', height: '100%'}}
      >
        <TileLayer 
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {orphanages ?
          orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapIcon}
                position={[orphanage.latitude,orphanage.longitude]}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                  {orphanage.name}
                  <Link to="/orphanages/1">
                    <FiArrowRight size={20} color="#FFF" />
                  </Link>
                </Popup>
              </Marker>
            )
          })
        : ""}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}