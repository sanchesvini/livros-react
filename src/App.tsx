// App.js
import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import  adicionarLivro  from './LivroLista'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        LivroLista
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Livros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="dados" className="nav-link">
                                Dados
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                <Route path="/" element={<LivroLista/>} />
                    <Route path="/dados" element={<LivroDados/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
