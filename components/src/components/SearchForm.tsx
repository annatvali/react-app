import { useState, useEffect } from 'react';

interface SearchFormProps {
  term: string;
  onSearchFormSubmit: (search: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({term, onSearchFormSubmit}) => {
  const [search, setSearch] = useState(term);
  const [hasError, setHasError] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    onSearchFormSubmit(search.trim());
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
      <button>Search</button>
      <button type="button" onClick={handleErrorBtnClick}>
        Error
      </button>
    </form>
  )
}
export default SearchForm;
