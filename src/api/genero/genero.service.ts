import connection from '../db/MySqlConnection';
import { Gender } from './genero.interface';

export class GenderService {

    static async getGenderById(genderId: string): Promise<Gender[] | undefined> {
        return new Promise<Gender[]>((resolve, reject) => {
            const query = `SELECT * FROM Genero WHERE ID_Genero = ?`;
            connection.query(query,[genderId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getGenders(): Promise<Gender | undefined> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `SELECT * FROM Genero`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createGender(genderData: Omit<Gender, 'ID_Genero'>): Promise<Gender> {
        return new Promise<Gender>((resolve, reject) => {
            const query = `INSERT INTO Genero SET ?`;
            connection.query(query, genderData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Genero: insertedId, ...genderData });
                }
            });
        });
    }
    
    
}