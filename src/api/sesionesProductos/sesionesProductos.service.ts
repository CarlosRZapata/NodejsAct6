import connection from '../db/MySqlConnection';
import { SessionProduct } from './sesionesProductos.interface';

export class SessionProductService {

    static async getSessionProductById(sessionProductId: string): Promise<SessionProduct[] | undefined> {
        return new Promise<SessionProduct[]>((resolve, reject) => {
            const query = `SELECT * FROM Sesiones_Productos WHERE IDSesion = ?`;
            connection.query(query,[sessionProductId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getSessionsProduct(): Promise<SessionProduct[] | undefined> {
        return new Promise<SessionProduct[]>((resolve, reject) => {
            const query = `SELECT * FROM Sesiones_Productos`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createSessionProduct(sessionProductData: Omit<SessionProduct, 'ID_Sesion'>): Promise<SessionProduct> {
        return new Promise<SessionProduct>((resolve, reject) => {
            const query = `INSERT INTO Sesiones_Productos SET ?`;
            connection.query(query, sessionProductData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Sesion: insertedId, ...sessionProductData });
                }
            });
        });
    }
    
    
}