import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria";
import Erros from "../../shared/Erros";
import Id from "../../shared/Id";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
  async executar(usuario: Usuario): Promise<void> {
    const senhaCripto = usuario.senha.split('').reverse().join('')
    const repo = new RepositorioUsuarioEmMemoria()
    const usuarioExistente = await repo.buscarPorEmail(usuario.email)
    if(usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)

    const novoUsuario: Usuario = { 
      id: Id.gerarHash(),
      nome: usuario.nome,
      email: usuario.email, 
      senha: senhaCripto 
    }

    repo.inserir(novoUsuario)
    console.log(`\n\n${JSON.stringify(novoUsuario)}`)
  }
}