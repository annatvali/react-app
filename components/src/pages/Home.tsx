import { useState, useEffect, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Planet } from '../types';
import Planets from '../components/Planets';
import { getAllItems} from '../api/index';
import '../styles/App.css';
import LoaderImg from '../components/Loader';
import Pagination from '../components/Pagination';
import SearchForm from '../components/SearchForm';

export default function Home ()  {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [term, setTerm] = useState<string>(localStorage.getItem('term') ?? '');
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  // const navigate = useNavigate();


  const updatePlanets = useCallback( () => {
    getAllItems(term).then((newPlanets: Planet[]) => {
      setPlanets(newPlanets);
      setLoading(false);
    });
  }, [term]);

  useEffect(() => {
    updatePlanets();
  }, [updatePlanets, term]);

  const handleFormSubmit = (term: string) => {
    localStorage.setItem('term', term);
    setTerm(term);
  };

  const totalPosts = planets.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const currentPosts = planets.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <>
      <SearchForm term={term} onFormSubmit={handleFormSubmit} />
      <div className="SelectItemsNumber">
        <label className="SelectLabel">
          Items per Page:
          <select className="SelectItemsPerPage"
            value={postsPerPage}
            onChange={(e) => setPostsPerPage(parseInt(e.target.value))}>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </label>
      </div>
      {loading ? ( <LoaderImg />) :
      (
        <>
          <Planets planets={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage}
            totalPages={totalPages}/>
        </>
      )}
    </>
  );
};

