import { Component } from 'react';
import '../App.css';

interface ResultProps {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: number;
}

interface CardsState {
  result: ResultProps[];
}

class Cards extends Component<{}, CardsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    this.api();
  }

  async api() {
    const data = await fetch("https://swapi.dev/api/planets/?format=json", {
      method: "GET",
    });
    const jsonData = await data.json();
    this.setState({ result: jsonData.results });
  }

  render() {
    const { result } = this.state;
    return (
      <div className='sectionCards'>
        <div className='grid'>
          {result.map((item, index) => (
            <div key={index} className='cardItem'>
              <h2>{item.name}</h2>
              <p>rotation period: {item.rotation_period}</p>
              <p>orbital period: {item.orbital_period}</p>
              <p>diameter: {item.diameter}</p>
              <p>climate: {item.climate}</p>
              <p>gravity: {item.gravity}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
