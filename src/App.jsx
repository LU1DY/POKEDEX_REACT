import React from "react";
import Contador from "./components/Contador";
import Renderizar from "./components/Renderizar";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [indice, setIndice] = React.useState(0);

  return (
    <main id="home">
      <Header />

      <h1>Pokemons:</h1>

      {indice ? (
        <Renderizar indice={indice} />
      ) : (
        <>
          <p style={{ fontSize: "1.6rem", color: "#fff" }}>Sem pokemons...</p>
        </>
      )}
      <Contador indice={indice} setIndice={setIndice} />
      <Footer />
    </main>
  );
};

export default App;
