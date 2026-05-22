const Joi = require("joi");

const ticketSchema = Joi.object({
  title: Joi.string().min(5).required(),
  description: Joi.string().min(6).required(),

});

module.exports = ticketSchema;