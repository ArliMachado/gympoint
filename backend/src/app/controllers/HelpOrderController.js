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
}

export default new HelpOrderController();
