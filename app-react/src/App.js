import React from 'react';
import logo from './logo.svg';
import './App.css'

import react, { useState } from 'react'

function Conteudo() {

  const [projetos, setProjetos] = useState([])

  function clickprojetos() {
    setprojetos(['Fortnite Battle Royale', 'Dead By Daylight', 'Super Mario World', 'Dev Tycoon', 'Doom:Eternal', 'Forza Horizon 4', 'Hitman'])
  }

  return <div>
    <button type="button" onClick={clickprojetos}>Atualiza projetos</button>

    {projetos.map((projeto, index) => (
      <p key={index}>{projeto}</p>
    ))}
  </div>
}

export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section>
          <ul>
            <li>
              <h3>Fortnite Battle Royale</h3>
              <span>Tecnologia: Unity</span>
              <p>Jogo de tiro em 3° pessoa com construções, armaldilhas e pocões de escudo</p>
            </li>
            <li>
              <h3>Dead by Daylight</h3>
              <span>Tecnologia: Unity e Game Maker</span>
              <p>Jogo de perseguição, com um assassino te perseguindo.</p>
            </li>
            <li>
              <h3>Super Mario World</h3>
              <span>Tecnologia: Unity, Rpg Studio</span>
              <p>Dois amigos entram em uma aventura para salvar a princesa das mãos do malvado bowser</p>
            </li>
            <li>
              <h3>Dev Tycoon</h3>
              <span>Tecnologia: Unity</span>
              <p>Simulação de um criador de jogos, parecendo a vida real</p>
            </li>
            <li>
              <h3>Doom:Eternal</h3>
              <span>Tecnologia: Unity</span>
              <p>Foco em tiro em 1° pessoa (FPS) com muito tiro, sangue, porrada e bomba</p>
            </li>
            <li>
              <h3>Forza Horizon 4</h3>
              <span>Tecnologia: Unity</span>
              <p>Jogo com foco em carros, Dinheiro, corridas (online e offline) e sempre ter um carro mais qualificado que o rival</p>
            </li>
            <li>
              <h3>Hitman</h3>
              <span>Tecnologia: Unity</span>
              <p>Você é um agente secreto com um treinamento militar insano, suas missões são as mais variadas,
                        desde matar assassinos até matar o chefe da mafia</p>
            </li>
          </ul>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}