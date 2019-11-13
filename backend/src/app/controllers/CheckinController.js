import { startOfWeek, endOfWeek } from 'date-fns';
import { Op } from 'sequelize';

import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async store(req, res) {
    const { id } = req.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return res.status(400).json({ error: 'O aluno informado não existe ' });
    }

    const { count: diasFrequentados } = await Checkin.findAndCountAll({
      where: {
        student_id: id,
        created_at: {
          [Op.between]: [startOfWeek(new Date()), endOfWeek(new Date())],
        },
      },
    });

    if (diasFrequentados === 5) {
      return res
        .status(400)
        .json({ error: 'Você atingiu o limite de frequências semanais' });
    }

    await Checkin.create({ student_id: id });

    return res.json();
  }
}

export default new CheckinController();
