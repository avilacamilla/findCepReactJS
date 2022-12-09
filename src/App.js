import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Informe o CEP');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');

    } catch {
      alert('CEP inválido');
      setInput('');
    }
  }

  
  

  return (
    <div className="container">

      <h1 className="title__cep">Busca CEP</h1>

      <div className="container__input">
          <input 
          type="text"
          placeholder="Informe o seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          />
        

        <button className="button__search" onClick={handleSearch}>
          <FiSearch size={25} color="#FFFFFF" />
      </button>
      </div>


      {Object.keys(cep).length > 0 && (
        <main className="main">

            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>

        </main>        
    )}      
      
    </div>
  );
}

export default App;
