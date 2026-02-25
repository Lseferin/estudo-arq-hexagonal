import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuarioEmMemoria from "@/adapter/db/RepositorioUsuarioEmMemoria";
import Erros from "../../shared/Erros";
import Id from "../../shared/Id";
import ProvedorCriptografia from "./ProvedorCriptografia";

export default class RegistrarUsuario 
  implements CasoDeUso<Usuario, void>
{

  constructor(
    private repositorio: RepositorioUsuarioEmMemoria,
    private provedorCripto: ProvedorCriptografia
  ) {}

  async executar(usuario: Usuario): Promise<void> {
    const senhaCripto = this.provedorCripto.criptografar(usuario.senha)

    const usuarioExistente = await this.repositorio.buscarPorEmail(usuario.email)
    if(usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)

    const novoUsuario: Usuario = { 
      id: Id.gerarHash(),
      nome: usuario.nome,
      email: usuario.email, 
      senha: senhaCripto 
    }

    this.repositorio.inserir(novoUsuario)
  }
}