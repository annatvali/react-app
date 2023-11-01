import { Component } from 'react';
import '../components/CardItems'
import '../App.css'

interface SearchState {
  searchTerm: string;
}

class Search extends Component<NonNullable<unknown>, SearchState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm.trim() });
    }
  }

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value.trim() });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    localStorage.setItem('searchTerm', searchTerm);

    if (searchTerm === '') {
      this.fetchData('https://swapi.dev/api/planets/?format=json');
    } else {
      this.fetchData(`https://swapi.dev/api/planets/?format=json/search?=${searchTerm}`);
    }
  };

  fetchData(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        console.log('API response:', data);
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div className='sectionSearch'>
        <form>
        <label>
            <input
          className='inputField'
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={this.handleSearchTermChange}
        />
        </label>
        <input type='submit' value='search' onClick={this.handleSearch} />
      </form>
      </div>
    );
  }
}

export default Search;
