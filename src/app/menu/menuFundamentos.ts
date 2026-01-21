import polimorfismo from "../fundamentos/polimorfismo";
import TerminalUtil from "../util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";

export default async function menuFundamentos() {
  while(true) {
    TerminalUtil.titulo("Fundamentos")

    const [indice] = await TerminalUtil.menu([
      "1. Polimorfismo",
      "Voltar",
    ])

    switch(indice) {
      case 0:
        await polimorfismo()
        break
      case 1:
        await menuPrincipal()
        return
    }
  }
}

