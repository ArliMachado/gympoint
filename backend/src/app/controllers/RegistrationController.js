import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

import Mail from '../../lib/Mail';

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

    const { id, end_date, price } = await Registration.create({
      student_id,
      plan_id,
      start_date,
    });

    /** Envio de email */

    const student = await Student.findByPk(student_id);

    const plan = await Plan.findByPk(plan_id);

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Confirmação de Matricula',
      template: 'registration',
      context: {
        student: student.name,
        plan: plan.title,
        start_date,
        end_date,
        price,
      },
    });

    return res.json({ id, start_date, end_date, price });
  }

  async update(req, res) {
    const { id } = req.params;
    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Matricula não encontrada' });
    }

    const { plan_id, start_date } = req.body;

    const registrationUpdated = await registration.update({
      plan_id,
      start_date,
    });

    return res.json(registrationUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;

    const registration = await Registration.findByPk(id);

    if (!registration) {
      return res.status(400).json({ error: 'Matricula não encontrada' });
    }

    await Registration.destroy({
      where: { id },
    });

    return res.json();
  }
}

export default new RegistrationController();
