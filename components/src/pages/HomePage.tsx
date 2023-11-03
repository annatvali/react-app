import { useState, useEffect, useCallback, Fragment } from 'react';
import SearchForm from '../components/SearchForm';
import { Planet } from '../types';
import Planets from '../components/Planets';
import { getAllPlanets } from '../api/index';
import './App.css';
import LoaderImg from '../components/Loader';


interface AppState {
  planets: Planet[];
  term: string;
  loading: boolean;
}

const HomePage: React.FC<AppState> = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [term, setTerm] = useState<string>(localStorage.getItem('term') ?? '');
  const [loading, setLoading] = useState<boolean>(true);

  const updatePlanets = useCallback( () => {
    getAllPlanets(term).then((newPlanets: Planet[]) => {
      setPlanets(newPlanets);
      setLoading(false);
    });
  }, [term]);

  useEffect(() => {
    updatePlanets();
  })

  useEffect(() => {
    updatePlanets();
  }, [updatePlanets]);

  const handleSearchFormSubmit = (term: string) => {
    localStorage.setItem('term', term);
    setTerm(term);
  };

  return (
    <Fragment>
      <SearchForm term={term} onSearchFormSubmit={handleSearchFormSubmit} />
      {loading ? <LoaderImg /> : <Planets planets={planets} />}
    </Fragment>
  );
};

export default HomePage;