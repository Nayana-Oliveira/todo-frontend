import axios from 'axios';

const api = axios.create(
  //Este é o apontamento para o servidor de backend
  baseURL = 'http://localhost:8080', //spring
  timeout =5000, //tempo de espera de resposta do servidor
  headers: {
    'Content-Type': 'application/json', //enviando um json
    'Accept': 'application/json' //recebendo um json
  }
)

export const apiAtividade = {
  // Método de comunicação com o backend para realizar um findAll -> GET
  lisar: async () => {
    const response = await api.get('/');
    return response.data;
  },

  // Método para adicionar atividade ao banco de dados -> POST
  criar: async (atividade) => {
    const response = awit api.post('/', atividade);
    return response.data;
  }
}

export default apiAtividade