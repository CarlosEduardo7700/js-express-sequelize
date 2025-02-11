const Services = require('./Services.js');

class PessoaService extends Services {

  constructor() {
    super('Pessoa');
  }

  async getMatriculasByEstudantes(id) {
    const estudante = await super.getById(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

}

module.exports = PessoaService;