import { addDays } from 'date-fns';
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

    const startDate = new Date();

    const endDate = addDays(startDate, 7);

    const checkins = await Checkin.findAll({
      where: {
        student_id: id,
        // created_at: {
        //   [Op.between]: [startDate, endDate],
        // },
      },
    });

    //    await Checkin.create({ student_id: id });

    return res.json();
  }
}

export default new CheckinController();
