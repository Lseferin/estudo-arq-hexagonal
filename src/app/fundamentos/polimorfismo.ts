import TerminalUtil from "../util/TerminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Viper from "@/core/fundamentos/Viper";
import Uno from "@/core/fundamentos/Uno";

export default async function polimorfismo() {
  TerminalUtil.titulo("Polimorfismo")

  const [tipoCarro] = await TerminalUtil.selecao('Tipo de carro?', ['Viper', 'Uno'])
  const carro: Carro = tipoCarro === 0 ? new Viper() : new Uno()
  
  while(true) {
    TerminalUtil.limpar()

    TerminalUtil.exibirChaveValor(
      "Velocidade Maxima: ", 
      `${carro.velocidadeMaxima} km/h`
    )
    TerminalUtil.exibirChaveValor(
      "Velocidade Atual: ", 
      `${carro.velocidadeAtual} km/h`
    )

    const [opcao] = await TerminalUtil.selecao(
      "Qual opção?",
      ["Acelerar", "Frear"]
    )

    opcao === 0 ? carro.acelerar() : carro.frear()
    
    const continuar = await TerminalUtil.confirmacao('Deseja continuar?')
    if(!continuar) return
  }
}