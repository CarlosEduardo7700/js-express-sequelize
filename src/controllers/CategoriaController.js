const CategoriaService = require('../services/CategoriaService.js');
const Controllers = require('./Controllers.js');

const categoriaService = new CategoriaService();

class CategoriaController extends Controllers {

  constructor() {
    super(categoriaService);
  }

}

module.exports = CategoriaController;