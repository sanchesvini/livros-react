import React from 'react'
import { Livro } from '../modelo/Livro';

class ControleLivros {
  private livros: Livro[];

  constructor() {
    // Inicialize o vetor de livros com pelo menos três elementos no formato JSON
    this.livros = [
      new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1 Livro 1", "Autor 2 Livro 1"]),
      new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 1 Livro 2", "Autor 2 Livro 2"]),
      new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 1 Livro 3", "Autor 2 Livro 3"])
    ];
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // Encontre o código mais alto no vetor
    const maxCodigo = this.livros.reduce((max, l) => (l.getCodigo() > max ? l.getCodigo() : max), 0);
    if (livro instanceof Livro) {
      livro.setCodigo(maxCodigo + 1);
      this.livros.push(livro);
      console.log("Livro adicionado na lista:");
      this.livros.forEach((livro) => {
        console.log(`Código: ${livro.getCodigo()}, Título: ${livro.getTitulo()}`);
      });
    } else {
      console.error('Não é uma instância de Livro');
    }
  }


  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.getCodigo() === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export { ControleLivros };
