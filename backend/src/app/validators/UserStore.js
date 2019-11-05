import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required('Campo obrigatório'),
      email: Yup.string().required('Campo obrigatório'),
      password: Yup.string()
        .required('Campo obrigatório')
        .min(6, 'A senha deve conter ao menos 6 caracteres'),
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
