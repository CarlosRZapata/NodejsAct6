
import connection from '../db/MySqlConnection';
import { Session } from './sesiones.interface';

export class SessionService {

    static async getSessionById(sessionId: string): Promise<Session[] | undefined> {
        return new Promise<Session[]>((resolve, reject) => {
            const query = `SELECT * FROM Sesiones WHERE ID_Sesion = ?`;
            connection.query(query,[sessionId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getSessions(): Promise<Session[] | undefined> {
        return new Promise<Session[]>((resolve, reject) => {
            const query = `SELECT * FROM Sesiones`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createSession(sessionData: Omit<Session, 'ID_Sesion'>): Promise<Session> {
        return new Promise<Session>((resolve, reject) => {
            const query = `INSERT INTO Sesiones SET ?`;
            connection.query(query, sessionData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Sesion: insertedId, ...sessionData });
                }
            });
        });
    }
    
    
}