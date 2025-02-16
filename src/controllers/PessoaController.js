const PessoaService = require('../services/PessoaService.js');
const Controllers = require('./Controllers.js');

const pessoaService = new PessoaService();

class PessoaController extends Controllers {

  constructor() {
    super(pessoaService);
  }

  async getMatriculasByEstudantes(req, res) {

    const { estudanteId } = req.params;

    try {
      const listaMatriculas = await pessoaService.getMatriculasByEstudantes(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

  async getByScopeTodosOsRegistros(req, res) {
    try {
      const lista = await pessoaService.getByScopeTodosOsRegistros();
      return res.status(200).json(lista);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

}

module.exports = PessoaController;