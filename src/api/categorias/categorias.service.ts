import connection from '../db/MySqlConnection';
import { Category } from './categorias.interface';

export class CategoryService {

    static async getCategoryById(categoryId: string): Promise<Category[] | undefined> {
        return new Promise<Category[]>((resolve, reject) => {
            const query = `SELECT * FROM Categorias WHERE ID_Categoria = ?`;
            connection.query(query,[categoryId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getCategories(): Promise<Category[] | undefined> {
        return new Promise<Category[]>((resolve, reject) => {
            const query = `SELECT * FROM Categorias`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createCategory(categoryData: Omit<Category, 'ID_Categoria'>): Promise<Category> {
        return new Promise<Category>((resolve, reject) => {
            const query = `INSERT INTO Categorias SET ?`;
            connection.query(query, categoryData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Categoria: insertedId, ...categoryData });
                }
            });
        });
    }
    
    
}