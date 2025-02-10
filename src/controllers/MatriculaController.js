const MatriculaService = require('../services/MatriculaService.js');
const Controllers = require('./Controllers.js');

const matriculaService = new MatriculaService();

class MatriculaController extends Controllers {

  constructor() {
    super(matriculaService);
  }

}

module.exports = MatriculaController;