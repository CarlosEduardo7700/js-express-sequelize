const PessoaService = require('../services/PessoaService.js');
const Controllers = require('./Controllers.js');

const pessoaService = new PessoaService();

class PessoaController extends Controllers {

  constructor() {
    super(pessoaService);
  }

  async getMatriculasAtivas(req, res) {

    const { estudanteId } = req.params;

    try {
      const listaMatriculas = await pessoaService.getMatriculasAtivas(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

  async getTodasMatriculas(req, res) {

    const { estudanteId } = req.params;

    try {
      const listaMatriculas = await pessoaService.getTodasMatriculas(Number(estudanteId));
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