const datasource = require('../database/models');

class Services {

  constructor(model) {
    this.model = model;

  }

  async getAll() {
    return datasource[this.model].findAll();
  }

  async getByScope(escopo) {
    return datasource[this.model].scope(escopo).findAll();
  }

  async getById(id) {
    return datasource[this.model].findByPk(id);
  }

  async getByAttributes(where) {
    return datasource[this.model].findOne({
      where: {
        ...where
      }
    });
  }

  async create(dadosDoRegistro) {
    return datasource[this.model].create(dadosDoRegistro);
  }

  async update(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = datasource[this.model].update(dadosAtualizados, {
      where: {
        id: id
      }
    });

    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    } else {
      return true;
    }
  }

  async delete(id) {
    return datasource[this.model].destroy({ where: { id: id } });
  }

}

module.exports = Services;