import connection from '../db/MySqlConnection';
import { Client } from './clientes.interface';

export class ClientService {

    static async getClientById(clientID: string): Promise<Client[] | undefined> {
        return new Promise<Client[]>((resolve, reject) => {
            const query = `SELECT * FROM Clientes WHERE ID_Cliente = ?`;
            connection.query(query,[clientID], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getClients(): Promise<Client[] | undefined> {
        return new Promise<Client[]>((resolve, reject) => {
            const query = `SELECT * FROM Clientes`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createClient(clientData: Omit<Client, 'ID_Cliente'>): Promise<Client> {
        return new Promise<Client>((resolve, reject) => {
            const query = `INSERT INTO Clientes SET ?`;
            connection.query(query, clientData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ID_Cliente: insertedId, ...clientData });
                }
            });
        });
    }
    
    
}