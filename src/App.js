import { FiSearch } from 'react-icons/fi';
import './styles.css'

function App() {
  return (
    <div className="container">

      <h1 className="title__cep">Localizar endereço por CEP</h1>

      <div className="container__input">
          <input 
          type="text"
          placeholder="Digite o seu cep" 
          />
        

        <button className="button__search">
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
