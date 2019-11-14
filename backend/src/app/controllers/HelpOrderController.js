import HelpOrders from '../models/HelpOrders';

import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { id: student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'O aluno informado não existe ' });
    }

    const questions = await HelpOrders.findAll({
      where: {
        student_id,
      },
    });

    return res.json(questions);
  }

  async findUnanswerHelpOrders(req, res) {
    const unansweredHelpOrders = await HelpOrders.findAll({
      where: {
        answer_at: null,
      },
      attributes: ['id', 'question'],
      order: ['created_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    return res.json(unansweredHelpOrders);
  }

  async store(req, res) {
    const { id } = req.params;
    const { question } = req.body;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'O aluno informado não existe ' });
    }

    const helpOrder = await HelpOrders.create({ student_id: id, question });

    return res.json(helpOrder);
  }

  async update(req, res) {
    const { id } = req.params;

    const helpOrder = await HelpOrders.findByPk(id);

    if (!helpOrder) {
      return res
        .status(400)
        .json({ error: 'Pedido de auxílio não encontrado' });
    }

    const { answer } = req.body;

    const { student_id, question } = await helpOrder.update({
      answer,
      answer_at: new Date(),
    });

    return res.json({ id, student_id, question, answer });
  }
}

export default new HelpOrderController();
