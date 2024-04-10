import connection from '../db/MySqlConnection';
import { Product } from './productos.interface';

export class ProductService {

    static async getProductById(productID: string): Promise<Product[] | undefined> {
        return new Promise<Product[]>((resolve, reject) => {
            const query = `SELECT * FROM Productos WHERE ID_Producto = ?`;
            connection.query(query,[productID], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async getProducts(): Promise<Product[] | undefined> {
        return new Promise<Product[]>((resolve, reject) => {
            const query = `SELECT * FROM Productos`;
            connection.query(query, [], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static async createProduct(productData: Omit<Product, 'ID_Producto'>): Promise<Product> {
        return new Promise<Product>((resolve, reject) => {
            const query = `INSERT INTO Productos SET ?`;
            connection.query(query, productData, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const insertedId = results.insertId;
                    resolve({ ID_Producto: insertedId, ...productData });
                }
            });
        });
    }
    
    
}