import { useEffect, useState } from 'react';
import Pokemon from '../component/Pokemon'
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(false);
  })

  return (
    <>
    {isLoading ? (
      <div className='loading'>
      <h1>Cargando...</h1>
      </div>
      ): (
    <>
    <div className="App">
            <Pokemon />
          </div><div className="ball">
              <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" alt="Ball-Pokemon" />
            </div><div className="ball2">
              <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" alt="Ball-Pokemon" />
            </div>
    </>
      )}
    </>
  );
};

export default App;
