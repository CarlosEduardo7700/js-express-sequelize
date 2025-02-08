const database = require('../models');

class PessoaController {

  static async getAll(req, res) {

    try {

      const lista = await database.Pessoa.findAll();
      return res.status(200).json(lista);
      
    } catch (error) {
      // Tratamento de erro
    }

  }

}

module.exports = PessoaController;