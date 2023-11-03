import { Planet } from '../types';
import { getPlanetImage } from '../api';

interface PlanetCardProps {
  planet: Planet;
}

export const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
  const { id, name, diameter, population } = planet;
  return (
    <div className="planetCard">
      <div className="planetView">
        <img className="planetImage" src={getPlanetImage(id)} />
        <div className="planetName">{name}</div>
      </div>
      <div className="planetInfo">
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
      {planets.map((p) =>
        <PlanetCard key={p.id} planet={p} /> )}
    </div>
  )
}

export default Planets;
