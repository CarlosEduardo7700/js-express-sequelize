const { Op } = require('sequelize');
const CursoService = require('../services/CursoService.js');
const Controllers = require('./Controllers.js');

const cursoService = new CursoService();

class CursoController extends Controllers {

  constructor() {
    super(cursoService);
  }

  async buscarCursosPorData(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    data_inicial || data_final ? where.data_inicio = {} : null;
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    try {
      const lista = await cursoService.getAll(where);
      return res.status(200).json(lista);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }

  }

}

module.exports = CursoController;