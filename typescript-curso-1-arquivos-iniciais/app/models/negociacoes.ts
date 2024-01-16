import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //private negociacoes: Array<Negociacao> = []; (pode ser escrito também da forma abaixo)
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //lista() : ReadonlyArray<Negociacao> (pode ser escrito também da forma abaixo)
    public lista() : readonly Negociacao[] {
        return this.negociacoes;
    }
}