import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css'

function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert('Valor digitado: ' + input);
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

      <main className="main">
        <h2>CEP: 23906485</h2>

        <span>Rua Vasco da Gama</span>
        <span>Complemento: Algum lugar</span>
        <span>Vila Rosa</span>
        <span>Rio de Janeiro - RJ</span>
      </main>


    </div>

    


  );
}

export default App;
