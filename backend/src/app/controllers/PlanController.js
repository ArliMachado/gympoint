import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll();
    return res.json(plans);
  }

  async store(req, res) {
    const plan = await Plan.create(req.body);
    return res.json(plan);
  }

  async update(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    const { id, title, duration, price } = await plan.update(req.body);
    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    if (!plan) {
      return res.status(400).json({ error: 'O plano não existe' });
    }

    await Plan.destroy({
      where: { id: plan.id },
    });
    return res.json();
  }
}

export default new PlanController();
