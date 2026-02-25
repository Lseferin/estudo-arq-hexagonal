import Usuario from "@/core/fundamentos/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/fundamentos/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg";


export default async function registrarUsuario() {
  const { campoRequerido, titulo, sucesso, erro, esperarEnter } = TerminalUtil
  titulo("Registrar Usuario")

  const nome = await campoRequerido('Nome: ')
  const email = await campoRequerido('Email: ')
  const senha = await campoRequerido('Senha: ')

  const usuario: Usuario = { nome, email, senha }

  
  try {
    const repositorio = new RepositorioUsuarioPg()
    const provedorCripto = new SenhaCripto() 
    // new EspacoSenhaCripto()
    // new InverterSenhaCripto()
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto)
    await casoDeUso.executar(usuario)
    sucesso('Usuario registrado com sucesso!')
  } catch(e: any) {
    erro(e.message)
  } finally {
    await esperarEnter()
  }
}





