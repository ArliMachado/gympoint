import HelpOrders from '../models/HelpOrders';

import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
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
}

export default new HelpOrderController();
