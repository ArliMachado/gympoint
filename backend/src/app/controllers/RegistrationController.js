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

    const { duration, price } = await Plan.findByPk(plan_id);

    const parsedStartDate = parseISO(start_date);

    const end_date = addMonths(parsedStartDate, duration);
    const calculedPrice = price * duration;

    const { id } = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price: calculedPrice,
    });

    return res.json({ id, start_date, end_date, price });
  }

  async update(req, res) {
    const { id } = req.params;
    const { plan_id, start_date } = req.body;

    const registration = await Registration.findByPk(id);

    if (registration.plan_id !== req.body.plan_id) {
      const { duration, price } = await Plan.findByPk(plan_id);

      const parsedStartDate = parseISO(start_date);

      req.body.end_date = addMonths(parsedStartDate, duration);
      req.body.price = Number(price) * duration;
    }

    const registerUpdated = await registration.update(req.body);

    return res.json(registerUpdated);
  }
}

export default new RegistrationController();
