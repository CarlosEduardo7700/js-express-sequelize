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
      // erro
    }
  }

}

module.exports = PessoaController;