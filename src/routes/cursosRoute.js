const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/curso', (req, res) => cursoController.buscarCursosPorData(req, res));
router.get('/curso/:id', (req, res) => cursoController.getById(req, res));
router.post('/curso', (req, res) => cursoController.create(req, res));
router.put('/curso/:id', (req, res) => cursoController.update(req, res));
router.delete('/curso/:id', (req, res) => cursoController.delete(req, res));

module.exports = router;