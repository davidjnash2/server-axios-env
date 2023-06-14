
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const [gifs, setGifs] = useState([]);

  const handleClick = () => {
    axios.get('/gifs')
      .then((response) => {
        console.log(response.data.data);
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.log('Error with client GET', error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">APIS</h1>
        <h4><i>APIS</i></h4>
      </header>

      <button onClick={handleClick}>GET THEM GIFS</button>
      {gifs.map((gif, i) => (
        <img key={i} src={gif.images.original.url}></img>
      ))}
      <br />
    </div>
  );

}

export default App;
