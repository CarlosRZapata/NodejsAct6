import connection from '../db/MySqlConnection';
import { Direction } from './direccion.interface';

export class DirectionService {

    static async getDirectionById(directionId: string): Promise<Direction[] | undefined> {
        return new Promise<Direction[]>((resolve, reject) => {
            const query = `SELECT * FROM Direccion WHERE ID_Direccion = ?`;
            connection.query(query,[directionId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getDirections(): Promise<Direction[] | undefined> {
        return new Promise<Direction[]>((resolve, reject) => {
            const query = `SELECT * FROM Direccion`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createDirection(directionData: Omit<Direction, 'ID_Direccion'>): Promise<Direction> {
        return new Promise<Direction>((resolve, reject) => {
            const query = `INSERT INTO Direccion SET ?`;
            connection.query(query, directionData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Direccion: insertedId, ...directionData });
                }
            });
        });
    }
    
    
}