import Carro from "./Carro";

export default class Uno implements Carro {
  constructor(
    readonly velocidadeMaxima: number = 177,
    private _velocidadeAtual: number = 0
  ) {}

  acelerar(): void {
    this._velocidadeAtual = Math.min(
      this._velocidadeAtual + 5,
      this.velocidadeMaxima
    )
  }

  frear(): void {
    this._velocidadeAtual = Math.max(
      this._velocidadeAtual - 5,
    )
  }

  get velocidadeAtual() {
    return this._velocidadeAtual
  }
}