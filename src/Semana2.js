/* Formulario LOGIN */


const [user, setUser] = useState("");
const [pass, setPass] = useState("");

const [showInfo, setShowInfo] = useState(false);



const handleLogin = (e) => {
    e.preventDefault();
    setShowInfo(true);
    console.log({user, pass});
};

return (
    <div className="App">
      {showInfo && (
          <h1>
            {""}
            User: {user} y Password: {pass}{""}
          </h1>
      )}
      <form onSubmit={(e) => handleLogin(e)}>
        <input value={user} placeholder="Enter username" onChange={(e) => setUser(e.target.value)} />
        <input value={pass} type="password" placeholder="Enter passwrod" onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
);


/* Generador de Quotes con color y bg al azar */

import Data from './quotes.json';
import './App.css';
import React, { useState } from 'react';

// ===== Imports de íconos de FontAwesome =========== 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// ===== Import Random color de NPM =================
import randomColor from 'randomcolor';


const randomArray = (length) => Math.floor(Math.random() * length);

const getQuote = () => Data.quotes[randomArray(Data.quotes.length)];

const QuoteBox = ({ quoteShowed, colorShowed, getNewQuote }) => {

  const { quote, author } = quoteShowed;

  return (
    <div className="QuoteBox">
      <div className="TextQuote" style={{color: colorShowed}}>"{quote}"</div>
      <div className="Author" style={{color: colorShowed}}>~ {author}</div>
      <div className="Links">
        <a href="https://twitter.com/intent/tweet" className="Icon">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
        <button className="Button" style={{color: colorShowed}} onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  )
}

function App() {

  const [color, setColor] = useState(randomColor());
  const [newQuote, setNewQuote] = useState(getQuote());

  const handleQuoteChange = () => {
    setNewQuote(getQuote());
    setColor(randomColor());
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox quoteShowed={newQuote} colorShowed={color} getNewQuote={handleQuoteChange}/>
    </div>
  );
}


/* Buscador de GIFS */

// ============ Import useEffect =========== 

import React, { useState, useEffect } from 'react';

const Search = ({handleSearchTerm}) => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
        <input onChange={(event) => {
          const value = event.target.value;
          setSearchTerm(value);
        }}/>
        <button  onClick={() => handleSearchTerm(searchTerm)}>Search</button>
    </div>
  );
};

const Gif = ({title, imgUrl}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imgUrl} alt={title}/>
    </div>
  );
};

function App() {

  const [gifs, setGifs] = useState([
    {
      title: "",
      url: "",
      images: {
        original: {
          url: ""
        },
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("kitties");

  useEffect( () => {

    const promise = fetch(`https://api.giphy.com/v1/gifs/search?api_key=HNJLGD49XyuEzp5FXLVz1UhUZUT6fuDn&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`);
    
    promise
      .then((body) => body.json())
      .then((data) =>
        setGifs(data.data));
    }, [searchTerm]
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  const gifsArray = gifs.map((value) => {
    return <Gif title={value.title} imgUrl={value.images.original.url} key={value.id}/>
  })

    return (
      <div className="App">
        <h2>Gifs Generator!</h2>
        <Search handleSearchTerm={handleSearch} />
        {gifsArray}
      </div>
    )
}

export default App;