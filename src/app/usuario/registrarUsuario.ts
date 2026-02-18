import Usuario from "@/core/fundamentos/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/fundamentos/usuario/service/RegistrarUsuario";
import { terminal } from "terminal-kit";

export default async function registrarUsuario() {
  TerminalUtil.titulo("Registrar Usuario")

  const nome = await TerminalUtil.campoRequerido('Nome: ')
  const email = await TerminalUtil.campoRequerido('Email: ')
  const senha = await TerminalUtil.campoRequerido('Senha: ')

  const usuario: Usuario = { nome, email, senha }

  await new RegistrarUsuario().executar(usuario)

  TerminalUtil.sucesso('Usuario registrado com sucesso!')
  await TerminalUtil.esperarEnter()

  try {
    await new RegistrarUsuario().executar(usuario)
  } catch(e: any) {
    TerminalUtil.erro(e.message)
  } finally {
    await TerminalUtil.esperarEnter()
  }
}