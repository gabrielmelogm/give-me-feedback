import axios from 'axios'
/**]
 * Recebe o code(string)
 * Recuperar o acess token no github
 * Verificar se o usuario existe no banco de dados
 * --SIM = Gerar um token
 * --Nao = Cria no banco e gera um token
 * Retornar o token com as infos do usuário logado
 */

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token"

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json"
      }
    })

    return response.data

  }
}

export {AuthenticateUserService}