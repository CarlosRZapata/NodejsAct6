import express from 'express'
import userRouter from './src/api/usuarios/usuarios.routes';
import productRouter from './src/api/productos/productos.routes';
import cors from 'cors';
import sessionRouter from './src/api/sesiones/sesiones.routes';
import categoryRouter from './src/api/categorias/categorias.routes';
import directionRouter from './src/api/direccion/direccion.routes';
import clientRouter from './src/api/clientes/clientes.routes';
import genderRouter from './src/api/genero/genero.routes';
import sessionProductRouter from './src/api/sesionesProductos/sesionesProductos.routes';


const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get('/', (_req,res) => {
    res.send('Hello world!!')
});

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/session', sessionRouter)
app.use('/api/category', categoryRouter)
app.use('/api/direction', directionRouter)
app.use('/api/client', clientRouter)
app.use('/api/gender', genderRouter)
app.use('/api/sessionProduct', sessionProductRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
