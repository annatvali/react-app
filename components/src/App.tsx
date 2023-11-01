import { Fragment, ReactElement, Component } from 'react';
import SearchForm from './SearchForm';
import { Planet } from './types';
import Planets from './Planets';
import { getAllPlanets } from './api/index';
import './App.css';


interface AppState {
  planets: Planet[];
  term: string;
}

export default class App extends Component<unknown, AppState> {
  state = {
    planets: [],
    term: localStorage.getItem('term') ?? '',
  };

  updatePlanets(): void {
    getAllPlanets(this.state.term).then((planets) => {
      this.setState({ planets });
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
        <Planets planets={this.state.planets} />
      </Fragment>
    );
  }
}