import { Request, Response } from 'express';
import User from '../models/users';


const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({_id: req.userId});

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar usuário' });
  }
}


const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, addressLine2, city, zipCode } = req.body;

    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.zipCode = zipCode;
    user.addressLine2 = addressLine2;

    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar usuário' });
  }
};



export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
};
