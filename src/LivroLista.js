import React, { useState, useEffect, useMemo } from 'react';
import { ControleLivros } from './controle/ControleLivro';
import { ControleEditora } from './controle/ControleEditora';
import LivroDados from './LivroDados';

function LinhaLivro({ livro, excluir }) {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
}

export default function LivroLista() {
    const [livros, setLivros] = useState([]);
    console.log(livros);
    const [carregado, setCarregado] = useState(false);
    const controleLivro = useMemo(() => new ControleLivros(), []);

    useEffect(() => {
        if (!carregado) {
            setLivros(controleLivro.obterLivros());
            setCarregado(true);
        }
    }, [carregado, controleLivro]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };





    return (
        <div>
            <main>

                <h1>Lista de Livros</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Editora</th>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro livro={livro} key={livro.codigo} excluir={excluir} />

                        ))}

                    </tbody>
                </table>


            </main>

        </div>

    );


}
