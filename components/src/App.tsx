import { Fragment, ReactElement, Component } from 'react';
import SearchForm from './SearchForm';
import { Planet } from './types';
import Planets from './Planets';
import { getAllPlanets } from './api/index';
import './App.css';
import LoaderImg from './Loader'


interface AppState {
  planets: Planet[];
  term: string;
  loading: boolean;
}

export default class App extends Component<unknown, AppState> {
  state = {
    planets: [],
    term: localStorage.getItem('term') ?? '',
    loading: true
  };

  updatePlanets(): void {
    getAllPlanets(this.state.term).then((planets) => {
      this.setState({ planets, loading: false });
    });
  }

  componentDidMount(): void {
    this.updatePlanets();
  }

  componentDidUpdate(_: unknown, prevState: AppState): void {
    if (prevState.term !== this.state.term) {
      this.updatePlanets();
    }
  }

  handleSearchFormSubmit(term: string): void {
    localStorage.setItem('term', term);
    this.setState({ term });
  }

  render(): ReactElement {
    return (
      <Fragment>
        <SearchForm
          term={this.state.term}
          onSearchFormSubmit={this.handleSearchFormSubmit}
        />
        { this.state.loading ? <LoaderImg /> : <Planets planets={this.state.planets} /> }
      </Fragment>
    );
  }
}