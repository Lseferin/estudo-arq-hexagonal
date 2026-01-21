import Carro from "./Carro";

export default class Viper implements Carro {
  constructor(
    readonly velocidadeMaxima: number = 266,
    private _velocidadeAtual: number = 0
  ) {}

  acelerar(): void {
    this._velocidadeAtual = Math.min(
      this._velocidadeAtual + 20,
      this.velocidadeMaxima
    )
  }

  frear(): void {
    this._velocidadeAtual = Math.max(
      this._velocidadeAtual - 20,
    )
  }

  get velocidadeAtual() {
    return this._velocidadeAtual
  }
}