import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      student_id: Yup.number().required('Campo obrigatório'),
      plan_id: Yup.number().required('Campo obrigatório'),
      start_date: Yup.string().required('Campo obrigatório'),
    });
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: err.inner });
  }
};
