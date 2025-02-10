const CursoService = require('../services/CursoService.js');
const Controllers = require('./Controllers.js');

const cursoService = new CursoService();

class CursoController extends Controllers {

  constructor() {
    super(cursoService);
  }

}

module.exports = CursoController;