class Controllers {

  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    try {
      const lista = await this.service.getAll();
      return res.status(200).json(lista);
    } catch (error) {
      // Tratamento de erro
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.service.getById(Number(id));
      return res.status(200).json(umRegistro);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

  async create(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.service.create(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const dadosAtualizados = req.body;

    try {
      const foiAtualizado = await this.service.update(dadosAtualizados, Number(id));

      if (!foiAtualizado) {
        return res.status(400).json({ message: 'Erro! Registro não atualizado!' });
      } else {
        return res.status(200).json({ message: 'Registro atualizado com sucesso!' });
      }

    } catch (error) {
      return res.status(500).json({ erro: error.message}); 
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.service.delete(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json({ erro: error.message});
    }
  }

}

module.exports = Controllers;