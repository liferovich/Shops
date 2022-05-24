import { sequelize } from '../database/database.state';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

class AuthService {
  async register(email: string, password: string) {
    const candidate = await sequelize.model('User').findOne({
      where: {
        email: email,
      },
    });

    if (candidate) {
      throw { status: 400, message: `The user with this email exists` };
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();
    const user = (
      await sequelize
        .model('User')
        .create({ email, password: hashPassword })
    ).get({ plain: true });

    return user;
  }

  async login(email: string, password: string) {
    const user = (
      await sequelize.model('User').findOne({
        where: {
          email,
        },
      })
    )?.get({ plain: true });

    if (!user) {
      throw { status: 404, message: 'User with this email doesn`t exist' };
    }

    const isPassEquels = await bcrypt.compare(password, user.password);

    if (!isPassEquels) {
      throw { status: 400, message: 'Invalid password' };
    }

    return user;
  }

}

export default new AuthService();