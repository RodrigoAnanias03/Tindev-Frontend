import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt=""/>

      <div className="content">
        <p>
          Ofereça <strong>spots </strong> para programadores e encontre <strong>talentos </strong> para sua empresa
          
          <form>
            <label htmlFor="email">E-MAIL *</label>
            <input 
              type="email"
              id="emal"
              placeholder="Seu melhor e-mail"
            />

            <button className="btn" type="submit">Entrar</button>
          </form>
        </p>
      </div>

    </div>
  );
}

export default App;
