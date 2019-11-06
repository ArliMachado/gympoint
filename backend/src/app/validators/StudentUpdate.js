import * as Yup from 'yup';

export default async (req, res, next) => {
  const REQUIRED_MESSAGE = 'Campo obrigatório';
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(REQUIRED_MESSAGE),
      email: Yup.string()
        .email('Informe o email correto')
        .required(REQUIRED_MESSAGE),
      age: Yup.number()
        .integer()
        .required(REQUIRED_MESSAGE),
      weight: Yup.number()
        .integer()
        .required(REQUIRED_MESSAGE),
      size: Yup.number()
        .integer()
        .required(REQUIRED_MESSAGE),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: err.inner });
  }
};
