const Yup = require('yup');
const Sala = require('../models/Sala');
const Instituicao = require('../models/Instituicao');

class SalaController {
  async index(req, res) {
    const salas = await Sala.findAll();
    if (salas.length <= 0) {
      return res.status(400).json({ error: 'Nenhuma sala cadastrada' });
    }
    return res.status(200).json(salas);
  }

  async show(req, res) {
    const { id } = req.params;
    const sala = await Sala.findByPk(id);
    if (!sala) {
      return res.status(400).json({ error: 'Sala não encontrado' });
    }
    return res.status(200).json(sala);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      instituicao_id: Yup.number().required(),
      bloco: Yup.string().required(),
      numero: Yup.number().required(),
      capacidade_max: Yup.number().required().min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos' });
    }

    const { instituicao_id, bloco, numero, capacidade_max } = req.body;

    const instituicao = await Instituicao.findByPk(instituicao_id);
    if (!instituicao) {
      return res.status(400).json({ error: 'Instituição não encontrado' });
    }

    const sala = await Sala.create({
      instituicao_id,
      bloco,
      numero,
      capacidade_max,
    });

    return res.status(201).json(sala);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const sala = await Sala.findByPk(id);
    if (!sala) {
      return res.status(400).json({ error: 'Instituição não encontrado' });
    }
    await sala.destroy();
    return res
      .status(200)
      .json({ message: 'Instituição removida com sucesso' });
  }
}

module.exports = new SalaController();
