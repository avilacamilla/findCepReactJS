function App() {
  return (
    <div className="container">
      <h1 className="title__cep">Buscador de CEP</h1>

      <div className="container__input">
        <input 
        type="text"
        placeholder="Digite o seu cep" 
        />
      </div>

      <button className="button__search">
        Procurar
      </button>
    </div>
  );
}

export default App;
