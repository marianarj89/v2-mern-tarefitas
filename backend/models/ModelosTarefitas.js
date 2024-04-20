const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    required: true
  },
  concluida: {
    type: Boolean,
    default: false
  }
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
