const PessoaService = require('../services/PessoaService.js');
const Controllers = require('./Controllers.js');

const pessoaService = new PessoaService();

class PessoaController extends Controllers {

  constructor() {
    super(pessoaService);
  }

}

module.exports = PessoaController;