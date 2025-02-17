const Services = require('./Services.js');

class PessoaService extends Services {

  constructor() {
    super('Pessoa');
  }

  async getMatriculasAtivas(id) {
    const estudante = await super.getById(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async getTodasMatriculas(id) {
    const estudante = await super.getById(id);
    const listaMatriculas = await estudante.getTodasMatriculas();
    return listaMatriculas;
  }

  async getByScopeTodosOsRegistros() {
    const lista = await super.getByScope('todosOsRegistros');
    return lista;
  }

}

module.exports = PessoaService;