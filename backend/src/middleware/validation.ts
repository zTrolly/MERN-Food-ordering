import { NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { Request, Response } from "express";

const handleValidationErrors = (req:Request, res:Response, next: NextFunction) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  next();
}

export const validateMyUserRequest = [
  body('name').isString().notEmpty().withMessage('Nome é obrigatório'),
  body('addressLine1').isString().notEmpty().withMessage('Endereço é obrigatório'),
  body('addresLine2').isString().notEmpty().withMessage('Bairro é obrigatório'),
  body('city').isString().notEmpty().withMessage('Cidade é obrigatória'),
  body('zipCode').isString().notEmpty().withMessage('CEP é obrigatório'),
  handleValidationErrors,
]