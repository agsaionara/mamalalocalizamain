import {MapContainer, Marker,Popup,TileLayer} from 'react-leaflet'
import { useEffect, useState } from 'react';
import {FiArrowRight} from 'react-icons/fi'
import Leaflet from 'leaflet'


import logo from '../assets/logo.svg';
import mapIcon from '../assets/map-marker.svg';
import mapIconEmpty from '../assets/map-marker-empty.svg';

import styles from './styles.module.scss';
import 'leaflet/dist/leaflet.css'
import { api } from '../service/api';

const mapPinIcon = Leaflet.icon({
  iconUrl: mapIcon,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const mapPinIconEmpty = Leaflet.icon({
  iconUrl: mapIconEmpty,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

interface Bancos{
  id: number;
  latitude: number;
  longitude:number;
  nome: string;
  estoque: boolean;
}

export default function BancosLeiteMap(){
  const [bancos, setBancos]= useState<Bancos[]>([]);
  
  useEffect(()=>{
    api.get('bancos').then(response => {
      setBancos(response.data);      
    })
  },[]);

  return(
    <div className={styles.pageMap}>
      <div className={styles.sideBar}>
        <header>
          <img src={logo} alt="logo" />

          <h2>Escolha a unidade que você deseja doar ou receber</h2>
          <p>Muitas mamães e bebês estão esperando sua ajuda :)</p>
        </header>       

        <footer>
          <strong>Itabuna</strong>
          <span>Bahia</span>
        </footer>
      </div>

    <MapContainer 
      center={[-14.7916209,-39.2956487]}
      zoom={15}
      style={{width:'100%', height:'100%'}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {bancos.map( bancos => {
        return(
          <Marker 
            icon = {!!bancos.estoque ? mapPinIcon: mapPinIconEmpty}
            position={[bancos.latitude,bancos.longitude]}      
            key={bancos.id}  
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'
            >
              {bancos.nome}
              <a href={`bancos/${bancos.id}`}>
                <FiArrowRight />
              </a>
            </Popup>
          </Marker>
        )
      })}
    
      </MapContainer>
    </div>
  )
}
