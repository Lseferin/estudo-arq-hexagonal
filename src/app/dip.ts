import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "./util/TerminalUtil";
import Uno from "@/core/fundamentos/Uno";
import Viper from "@/core/fundamentos/Viper";
import Carro from "@/core/fundamentos/Carro";
import Civic from "@/core/fundamentos/Civic";
import { terminal } from "terminal-kit";

export default async function dip() {
  TerminalUtil.titulo('DIP')

  const [tipo] = await TerminalUtil.selecao("Tipo de carro?", [
    "Uno", "Civic", "Viper"
  ])

  let carro: Carro

  switch(tipo) {
    case 0:
      carro = new Uno()
      break
    case 1:
      carro = new Civic()
      break
    default:
      carro = new Viper()
      break
  }

  corrida(carro, terminal.red)
  await TerminalUtil.esperarEnter()
}