const Yup = require('yup');
const Instituicao = require('../models/Instituicao');
// const Aluno = require('../models/Aluno');
// const Sala = require('../models/Sala');

class InstituicaoController {
  async index(req, res) {
    const instituicoes = await Instituicao.findAll({
      // include: [
      //   {
      //     model: Sala,
      //     as: 'salas',
      //     attributes: ['bloco', 'numero', 'capacidade_max'],
      //     include: [
      //       {
      //         model: Aluno,
      //         as: 'alunos',
      //         attributes: ['nome_completo', 'matricula', 'curso'],
      //       },
      //     ],
      //   },
      // ],
    });
    if (instituicoes.length <= 0) {
      return res.status(400).json({ error: 'Nenhuma instituição cadastrada' });
    }
    return res.status(200).json(instituicoes);
  }

  async show(req, res) {
    const { id } = req.params;
    const instituicao = await Instituicao.findByPk(id);
    if (!instituicao) {
      return res.status(400).json({ error: 'Instituição não encontrado' });
    }
    return res.status(200).json(instituicao);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      nome_fantasia: Yup.string().required(),
      cnpj: Yup.string().required().min(14).max(14),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos campos' });
    }

    const { nome, nome_fantasia, cnpj } = req.body;

    const instituicao = await Instituicao.create({ nome, nome_fantasia, cnpj });

    return res.status(201).json(instituicao);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const instituicao = await Instituicao.findByPk(id);
    if (!instituicao) {
      return res.status(400).json({ error: 'Instituição não encontrado' });
    }
    await instituicao.destroy();
    return res
      .status(200)
      .json({ message: 'Instituição removida com sucesso' });
  }
}

module.exports = new InstituicaoController();
