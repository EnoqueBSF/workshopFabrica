const Yup = require('yup');
const Sala = require('../models/Sala');
const Instituicao = require('../models/Instituicao');
const Aluno = require('../models/Aluno');

class SalaController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    if (alunos.length <= 0) {
      return res.status(400).json({ error: 'Nenhum aluno cadastrada' });
    }
    return res.status(200).json(alunos);
  }

  async show(req, res) {
    const { id } = req.params;
    const aluno = await Aluno.findByPk(id);
    if (!aluno) {
      return res.status(400).json({ error: 'Aluno não encontrado' });
    }
    return res.status(200).json(aluno);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      instituicao_id: Yup.number().required(),
      sala_id: Yup.number(),
      nome_completo: Yup.string().required(),
      matricula: Yup.string().required(),
      anotacao: Yup.string(),
      curso: Yup.string().required(),
      periodo: Yup.number().required(),
      cpf: Yup.string().required().min(11).max(11),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos' });
    }

    const {
      instituicao_id,
      sala_id,
      nome_completo,
      matricula,
      anotacao,
      curso,
      periodo,
      cpf,
    } = req.body;

    const instituicao = await Instituicao.findByPk(instituicao_id);
    if (!instituicao) {
      return res.status(400).json({ error: 'Instituição não encontrado' });
    }
    if (sala_id) {
      const sala = await Sala.findByPk(sala_id);
      if (!sala) {
        return res.status(400).json({ error: 'Sala não encontrado' });
      }
    }

    const aluno = await Aluno.create({
      instituicao_id,
      sala_id,
      nome_completo,
      matricula,
      anotacao,
      curso,
      periodo,
      cpf,
    });

    return res.status(201).json(aluno);
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
