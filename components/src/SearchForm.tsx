import { ChangeEvent, Component, FormEvent, ReactElement } from 'react';

interface SearchFormProps {
  term: string;
  onSearchFormSubmit: (search: string) => void;
}

interface SearchFormState {
  search: string;
  hasError: boolean;
}

export default class SearchForm extends Component<
  SearchFormProps,
  SearchFormState
> {
  state = {
    search: this.props.term,
    hasError: false,
  };

  componentDidUpdate(): void {
    if (this.state.hasError) {
      throw new Error('Unexpected error');
    }
  }

  handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault()
    this.props.onSearchFormSubmit(this.state.search.trim());
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.target.value });
  };

  handleErrorBtnClick = (): void => {
    this.setState({ hasError: true });
  };

  render(): ReactElement {
    console.log('SearchForm');
    return (
      <form className="searchForm" onSubmit={this.handleFormSubmit}>
        <input
          type="search"
          value={this.state.search}
          onChange={this.handleInputChange}
        />
        <button>Search</button>
        <button type="button" onClick={this.handleErrorBtnClick}>
          Error
        </button>
      </form>
    );
  }
}