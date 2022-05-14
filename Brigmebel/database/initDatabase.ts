import { sequelize } from './database.state';
import './models/index';

export const initDatabase = async () => {
    try {
        await sequelize.sync();

        console.log('Postgres connected');
    } catch (e) {
        console.log('Failed to connect' + (e as Error).message);
        process.exit(1);
    }
};
