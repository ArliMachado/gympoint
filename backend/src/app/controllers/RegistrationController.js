import { parseISO, addMonths } from 'date-fns';

import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price'],
      order: ['start_date'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email', 'age', 'weight', 'size'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    return res.json(registrations);
  }

  async store(req, res) {
    const { student_id, plan_id, start_date } = req.body;

    const plan = await Plan.findByPk(plan_id);

    const parsedStartDate = parseISO(start_date);

    const end_date = addMonths(parsedStartDate, plan.duration);
    const price = plan.price * plan.duration;

    const { id } = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    return res.json({ id, start_date, end_date, price });
  }
}

export default new RegistrationController();
