import * as Yup from 'yup';

export default async (req, res, next) => {
  const REQUIRED_MESSAGE = 'Campo obrigatório';

  try {
    const schema = Yup.object().shape({
      question: Yup.string().required(REQUIRED_MESSAGE),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: err.inner });
  }
};
