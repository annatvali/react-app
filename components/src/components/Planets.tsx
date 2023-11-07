import {  Planet } from '../types';
import { getItemImage } from '../api';
import TatooineImg from '../assets/Tatooine.webp'

interface PlanetCardProps {
  planet: Planet;
}

export const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  const { id, name, diameter, population } = planet;
  return (
    <div className="planetCard">
      <div className="planetView">
        <div>
          <img className="planetImage" src={id === '1' ? TatooineImg : getItemImage(id)} />
        </div>
        <div className="ItemName">{name}</div>
      </div>
      <div className="temInfo">
        <div>
          Diameter: {diameter}
          {diameter !== 'unknown' && 'km'}
        </div>
        <div>Population: {population}</div>
      </div>
    </div>
  )
}

interface PlanetsProps {
  planets: Planet[];
}

const Planets: React.FC<PlanetsProps> = ({ planets }) => {
  return (
    <div className='planets'>
      {planets.map((planet) =>
        <PlanetCard key={planet.id} planet={planet} /> )}
    </div>
  )
}

export default Planets;
