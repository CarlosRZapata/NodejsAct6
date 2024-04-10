
import connection from '../db/MySqlConnection';
import { User } from '../usuarios/usuarios.interface';

export class UserService {

    static async getUserById(userId: string): Promise<User[] | undefined> {
        return new Promise<User[]>((resolve, reject) => {
            const query = `SELECT * FROM usuarios WHERE ID_Usuario = ?`;
            connection.query(query, [userId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getUsers(): Promise<User | undefined> {
        return new Promise<User>((resolve, reject) => {
            const query = `SELECT * FROM usuarios`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createUser(userData: Omit<User, 'ID_Usuario'>): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const query = `INSERT INTO usuarios SET ?`;
            connection.query(query, userData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Usuario: insertedId, ...userData });
                }
            });
        });
    }
    
    
}