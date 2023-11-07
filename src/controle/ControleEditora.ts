import React from 'react'
import { Editora } from "../modelo/Editora";

class ControleEditora {
  private editoras: Editora[];

  constructor() {
    // Inicialize o vetor de editoras com pelo menos três elementos no formato JSON
    this.editoras = [
      new Editora(1, "Editora A"),
      new Editora(2, "Editora B"),
      new Editora(3, "Editora C")
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.getCodEditora() === codEditora);
    return editora ? editora.getNome() : undefined;
  }
}

export { ControleEditora };
