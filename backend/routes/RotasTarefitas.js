const {Router} = require ('express');
const { getTarefas, salvarTarefa, updateTarefa, deletarTarefa } = require('../controllers/ControladoresTarefitas');
const router = Router()

// const Tarefas = require('../models/Tarefas')

router.get('/', getTarefas);
router.post('/salvar', salvarTarefa);
router.post('/update', updateTarefa);
router.post('/deletar', deletarTarefa);


module.exports = router;