import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const {
      registration: {
        start_date,
        end_date,
        price,
        student: { name, email },
        plan: { title },
      },
    } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Confirmação de Matricula',
      template: 'registration',
      context: {
        student: name,
        plan: title,
        start_date: format(parseISO(start_date), 'dd/MM/yyyy', { locale: pt }),
        end_date: format(parseISO(end_date), 'dd/MM/yyyy', { locale: pt }),
        price,
      },
    });
  }
}

export default new RegistrationMail();
