import Sequelize, { Model } from 'sequelize';

class HelpOrders extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        answer_at: Sequelize.DATE,
        answered: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, ['answer', 'answer_at']),
          get() {
            return (
              this.get('answer') !== null && this.get('answer_at') !== null
            );
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}

export default HelpOrders;
