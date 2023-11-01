import { Component } from 'react';
import Cards from '../components/CardItems';
import Search from '../components/Search'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h1>Home Page</h1>
        <Search />
        <Cards />
      </div>
    );
  }
}

export default Home;