import Joi from 'joi'

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required().min(8),
  //confirmPassword: Joi.string().required().valid(Joi.ref('password')),
})

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})
