const MatriculaService = require('../services/MatriculaService.js');
const Controllers = require('./Controllers.js');

const matriculaService = new MatriculaService();

class MatriculaController extends Controllers {

  constructor() {
    super(matriculaService);
  }

  async countByEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const lista = await matriculaService.countByEstudantex({
        estudante_id: Number(estudante_id),
        status: 'matriculado'
      });
      return res.status(200).json(lista);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

}

module.exports = MatriculaController;