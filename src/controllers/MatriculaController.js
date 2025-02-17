const Sequelize = require('sequelize');
const MatriculaService = require('../services/MatriculaService.js');
const Controllers = require('./Controllers.js');

const matriculaService = new MatriculaService();

class MatriculaController extends Controllers {

  constructor() {
    super(matriculaService);
  }

  async countByEstudantes(req, res) {
    const { estudante_id } = req.params;
    try {
      const lista = await matriculaService.count(
        {
          where: {
            estudante_id: Number(estudante_id),
            status: 'matriculado'
          },
          limit: 2,
          order: [['id', 'DESC']]
        }
      );
      return res.status(200).json(lista);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

  async getCursosLotados(req, res) {
    const lotacaoCurso = 2;
    try {
      const cursosLotados = await matriculaService.countByEstudantes({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
      });
      return res.status(200).json(cursosLotados.count);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

}

module.exports = MatriculaController;