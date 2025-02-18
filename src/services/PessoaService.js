const Services = require('./Services.js');

class PessoaService extends Services {

  constructor() {
    super('Pessoa');
    this.matriculaService = new Services('Matricula');
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

  async cancelaPessoaEMatriculas(estudanteId) {
    await super.update({ ativo: false }, { id: estudanteId });
    await this.matriculaService.update({ status: 'cancelado' }, { estudante_id: estudanteId });
  }

}

module.exports = PessoaService;