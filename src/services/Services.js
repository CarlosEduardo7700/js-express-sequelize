const datasource = require('../database/models');

class Services {

  constructor(model) {
    this.model = model;

  }

  async getAll(where = {}) {
    return datasource[this.model].findAll({ where: { ...where } });
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

  async count(options) {
    return datasource[this.model].findAndCountAll({ ...options });
  }

  async create(dadosDoRegistro) {
    return datasource[this.model].create(dadosDoRegistro);
  }

  async update(dadosAtualizados, where) {
    const listaDeRegistrosAtualizados = datasource[this.model].update(dadosAtualizados, {
      where: {
        ...where
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