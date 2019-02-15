import React, { Component } from 'react';
import './App.css';
import StarWarsList from './components/StarWarsList';
import LoadPageButtons from './components/LoadPageButtons';
import './components/StarWars.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: null,
      prevPage:null,
      filmList:[],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
      console.log(data);
        this.setState({ 
            starwarsChars: data.results, 
            nextPage:data.next,
            prevPage:data.previous,
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  prevPage = () => {
     //console.log('prev');
     if(this.state.prevPage)
      this.getCharacters(this.state.prevPage)
  }

  nextPage = () => {
     console.log('next');
     this.getCharacters(this.state.nextPage);
  }

  render() {
    return (
      <div className="App">
        <h2 className="Header">React  Wars</h2>
         <StarWarsList
            dataList={this.state.starwarsChars}
            // getFilms={this.getFilms}
         />

         <LoadPageButtons
            prevPage={this.prevPage}
            nextPage={this.nextPage}
         />
      </div>
    );
  }
}

export default App;
