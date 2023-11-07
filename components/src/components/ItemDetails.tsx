// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Planet } from '../types';
import TatooineImg from '../assets/Tatooine.webp';
import { getItemImage } from '../api';

interface ItemDetailsProps {
  planet: Planet;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ planet }) => {
  const { id, name, diameter, population, residents, films, gravity,
   orbital_period, rotation_period, surface_water, terrain} = planet;
  return (
    <div className="planetCard">
      <div className="planetView">
        <div>
          <img className="planetImage" src={id === '1' ? TatooineImg : getPlanetImage(id)} />
        </div>
        <div className="ItemName">{name}</div>
      </div>
      <div className="temInfo">
        <div>
          Diameter: {diameter}
          {diameter !== 'unknown' && 'km'}
        </div>
        <div>Population: {population}</div>
        <div>residents: {residents}</div>
        <div>Films: {films}</div>
        <div>gravity: {gravity}</div>
        <div>Orbital Period: {orbital_period}</div>
        <div>Rotation Period: {rotation_period}</div>
        <div>Surface Water: {surface_water}</div>
        <div>Terrain: {terrain}</div>
        <div>Population: {population}</div>
      </div>
    </div>
  )
};

export default ItemDetails;