const express = require('express');

const InfoController = require('./app/controllers/InfoController.js');
const InstituicaoController = require('./app/controllers/InstituicaoController.js');
const SalaController = require('./app/controllers/SalaController.js');
const AlunoController = require('./app/controllers/AlunoController.js');

const routes = express.Router();

routes.get('/', InfoController.index);

routes.post('/instituicoes', InstituicaoController.store);
routes.get('/instituicoes', InstituicaoController.index);
routes.get('/instituicoes/:id', InstituicaoController.show);
routes.delete('/instituicoes/:id', InstituicaoController.destroy);

routes.post('/salas', SalaController.store);
routes.get('/salas', SalaController.index);
routes.get('/salas/:id', SalaController.show);
routes.delete('/salas/:id', SalaController.destroy);

routes.post('/alunos', AlunoController.store);
routes.get('/alunos', AlunoController.index);
routes.get('/alunos/:id', AlunoController.show);
routes.delete('/alunos/:id', AlunoController.destroy);

module.exports = routes;
