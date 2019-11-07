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
}

export default new PlanController();
