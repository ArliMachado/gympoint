import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const { q = '' } = req.query;

    const students = await Student.findAll({
      where: {
        name: {
          [Op.like]: `%${q}%`,
        },
      },
    });

    return res.json(students);
  }

  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'O aluno já existe' });
    }
    const { id, name, email, age, weight, size } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      size,
    });
  }

  async update(req, res) {
    const { email } = req.body;
    const student = await Student.findByPk(req.params.id);

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'O aluno já existe' });
      }
    }

    const { id, name, age, weight, size } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weight,
      size,
    });
  }
}

export default new StudentController();
