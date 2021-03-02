import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Pokedex 

const SearchType = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <p>Search by Type</p>
      <input onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={() => handleSearch(searchTerm)}>search</button>
    </div>
  );
};

const SearchPokemon = ({handleSearch}) => {
  const [searchName, setSearchName] = useState("");

  return (
    <div>
      <p>Search by Pokemon</p>
      <input onChange={(e) => setSearchName(e.target.value)}/>
      <button onClick={() => handleSearch(searchName)}>search</button>
    </div>
  )
}

const PokemonsByType = ({name, url, type}) => {

  const [pokemon, setPokemon] = useState(null);

  useEffect( ()=> {

    const promise = axios(url);

    promise.then((res) => {
      setPokemon(res.data.sprites.front_default);
    });
  }, [url]);

  return (
    <div>
      <h1>{name}</h1>
      <img src={pokemon} alt={name} />
      <p>Type: {type}</p>
    </div>
  );
};

const PokemonItem = ({name, imgUrl, type, pokeNum, specials}) => {

  const pokemonTypes = type.map((value) => <span key={value.slot}>{value.type.name}</span>);

  const pokemonSpecials = specials.map((value) => (
      <li key={value.move.name}>- {value.move.name} </li>
    )
  );

  return (
    <div>
      <h1>{name}</h1>
      <img src={imgUrl} alt={name} />
      <div>No. in Pokedex: {pokeNum} Type(s): {pokemonTypes}</div>
      <h3>Special moves: </h3>
      <div>
        <ol>
          {pokemonSpecials}
        </ol>
      </div>

    </div>
  )
}

function App() {

  // ===================== Search by Type =========================================

  const [query, setQuery] = useState("");
  const [pokes, setPokes] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    if(query) {
      const promise = axios(`https://pokeapi.co/api/v2/type/${query}`);

      promise.then((res) => {
        setPokes(res.data.pokemon.slice(0, 20));
        setType(res.data.name);
      });
    }
  }, [query]);

  const handleSearchType = (value) => {
    setQuery(value);
  };

  const arrOfPokemons = pokes.map((value) => (
    <PokemonsByType
      name={value.pokemon.name} 
      url={value.pokemon.url} 
      type={type} 
      key={value.pokemon.name}
    />)
  );


  // ========================== Search by Pokemon =======================================

  const [pokeName, setPokeName] = useState("");
  const [pokemon, setPokemon] = useState();
  
  useEffect(() => {
    if(pokeName) {
      const promise = axios(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);

      promise.then((res) => {
        setPokemon(res.data);
      });
    }
  });

  const handleSearchPokemon = (value) => {
    setPokeName(value);
  }


  return (
    <div className="App">
      <h1>Pokedex</h1>
      <SearchType handleSearch={handleSearchType} />
      <SearchPokemon handleSearch={handleSearchPokemon}/>
      {pokes.length > 0 && arrOfPokemons}
      {pokemon && (
        <PokemonItem
          name={pokemon.name}
          imgUrl={pokemon.sprites.front_default}
          type={pokemon.types}
          pokeNum={pokemon.order}
          specials={pokemon.moves}
        />)}
    </div>
  );
}

export default App;