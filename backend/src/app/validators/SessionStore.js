import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Informe o email correto')
        .required('Campo obrigatório'),
      password: Yup.string().required('Campo obrigatório'),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: err.inner });
  }
};
