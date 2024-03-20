import express from 'express'
import userRouter from './src/api/usuarios/usuarios.routes';


const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (_req,res) => {
    res.send('Hello world!!')
});
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
