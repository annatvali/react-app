import { useState, useEffect } from 'react';


interface SearchFormProps {
  term: string;
  onFormSubmit: (search: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({term, onFormSubmit}) => {
  const [search, setSearch] = useState(term);
  const [hasError, setHasError] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    onFormSubmit(search.trim());
    e.preventDefault();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleErrorBtnClick = () => {
    setHasError(true);
  }

  useEffect( () => {
    if (hasError) {
      throw new Error('Unexpected error');
    }
  })

  return(
    <form className="searchForm" onSubmit={handleFormSubmit}>
      <input
        type="search"
        value={search}
        onChange={handleInputChange}
      />
      <button className="btnSearch">Search</button>
      <button className="btnError" type="button" onClick={handleErrorBtnClick}>
        Error
      </button>
    </form>
  )
}
export default SearchForm;
