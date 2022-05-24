import express from 'express';
import { default as userService } from '../services/user.service';
import { validationResult } from 'express-validator';

class UserController {
  async register(req: express.Request, res: express.Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: `Validation error ${errors.array()}` });
      }
      const { email, password } = req.body;
      const userData = await userService.register(email, password);

      return res.json(userData);
    } catch (err: any) {
      if (err.status) {
        res.status(err.status).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'Server error..' } });
      }
    }
  }

  async login(req: express.Request, res: express.Response) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const userData = await userService.login(email, password);

      return res.json(userData);
    } catch (err: any) {
      if (err.status) {
        res.status(err.status).json({ error: { message: err.message } });
      } else {
        res.status(500).json({ error: { message: 'Server error..' } });
      }
    }
  }
}

export default new UserController();