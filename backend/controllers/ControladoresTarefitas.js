const TarefaModel = require("../models/ModelosTarefitas");

module.exports.getTarefas = async (req, res) => {
  try {
    const tarefas = await TarefaModel.find();
    res.send(tarefas);
  } catch (error) {
    console.error("Erro ao obter tarefas:", error);
    res.status(500).send("Erro ao obter tarefas");
  }
};

module.exports.salvarTarefa = async (req, res) => {
  try {
    const { text } = req.body;

    const novaTarefa = await TarefaModel.create({ tarefa: text });
    console.log("Tarefa salva com sucesso:", novaTarefa);
    res.send(novaTarefa);
  } catch (error) {
    console.error("Erro ao salvar a tarefa:", error);
    res.status(500).send("Erro ao salvar a arefa");
  }
}

module.exports.updateTarefa = async (req, res) => {
    const { _id, text } = req.body;
    try {
        const updatedTarefa = await TarefaModel.findByIdAndUpdate(_id, { tarefa: text });
        if (updatedTarefa) {
            console.log("Tarefa atualizada com sucesso:", updatedTarefa);
            res.send("Tarefa atualizada com sucesso");
        } else {
            console.log("Tarefa não encontrada");
            res.status(404).send("Tarefa não encontrada");
        }
    } catch (error) {
        console.error("Erro ao atualizar a tarefa:", error);
        res.status(500).send("Erro ao atualizar a tarefa");
    }
}


module.exports.deletarTarefa = async (req, res) => {
    const { _id } = req.body;
    TarefaModel
    .findByIdAndDelete(_id )
    .then(() => res.send ("Tarefa removida com sucesso"))
    .catch((err) => console.log(err));
}


