import React from 'react';
import PropTypes from "prop-types"
import './App.css';
import pokemon from "./pokemon.json"

const PokemonRow = ({pokemon}) => (
          <tr>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
          </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  }),
};

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        padding: "1rem"
      }}
    >
      <h1 className='title'>My first React Website</h1>
      <h2 className='author'>By Tono Abad</h2>

      <table width="100%">

        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {pokemon.slice(0, 30).map((pokemon) => (
            <PokemonRow pokemon = {pokemon} key={pokemon.id} />
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default App;
