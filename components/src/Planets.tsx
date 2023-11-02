import { Component, ReactElement } from 'react';
import { Planet } from './types';
import { getPlanetImage } from './api';

interface PlanetCardProps {
  planet: Planet;
}

class PlanetCard extends Component<PlanetCardProps> {
  render(): ReactElement {
    const { id, name, diameter, population } = this.props.planet;
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
    );
  }
}

interface PlanetsProps {
  planets: Planet[];
}

export default class Planets extends Component<PlanetsProps> {
  render(): ReactElement {
    console.log('Planets');
    return (
      <div className="planets">
        {this.props.planets.map((p) => (
          <PlanetCard key={p.id} planet={p} />
        ))}
      </div>
    );
  }
}