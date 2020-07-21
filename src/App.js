import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase.js'

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  &:hover{
    cursor: pointer;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

function App() {

  //state de Frases
  const [frase, setFrase] = useState({})

  // const consultarApi = () => {
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const frase = api.then(respuesta => respuesta.json());
  //   frase.then(resultado => console.log(resultado))
  // }
  const consultarApiAsync = async() => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    setFrase(frase[0]);
  }

  //cargar una Frase
  useEffect( () => {
    consultarApiAsync()
  }, []);

  return (
    <Contenedor>
    <Frase
      frase={frase}
    />
      <Boton
        onClick={consultarApiAsync}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
