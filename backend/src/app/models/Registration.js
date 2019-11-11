import Sequelize, { Model } from 'sequelize';
import { parseISO, addMonths } from 'date-fns';

import Plan from './Plan';

class Registration extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async registration => {
      const plan = await Plan.findByPk(registration.plan_id);

      registration.end_date = addMonths(registration.start_date, plan.duration);
      registration.price = plan.price * plan.duration;
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Registration;
