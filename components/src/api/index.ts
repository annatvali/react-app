import { Planet, PlanetBase } from '../types';

const SWAPI_API_BASE = 'https://swapi.dev/api';
const IMAGE_API_BASE = 'https://starwars-visualguide.com/assets/img';

const makeRequest = async (url: string) => {
  const res = await fetch(`${SWAPI_API_BASE}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  }
  return res.json();
};

const transformPlanet = (planet: PlanetBase): Planet => {
  const idRegExp = /\/([0-9]*)\/$/;
  const id = (planet.url.match(idRegExp) as unknown as string)[1];
  return { ...planet, id };
};

export const getAllPlanets = async (term: string): Promise<Planet[]> => {
  const response = await makeRequest(`/planets/?search=${term}`);
  const planets: PlanetBase[] = response.results;
  return planets.map(transformPlanet);
};

export const getPlanetImage = (id: string): string => {
  return `${IMAGE_API_BASE}/planets/${id}.jpg`;
};