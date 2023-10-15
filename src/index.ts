import express, { Request, Response, NextFunction } from "express"
import product from "./routes/products"

const app = express();
const port = process.env.PORT || 30788;

app.use(express.json());
app.use(( req: Request, res: Response, next: NextFunction ) => {
    console.log( `${req.method} request for ${req.url}` );
    next();
});

app.use('/products', product);

app.listen( port, () => {
    console.log(`server start on port : ${port}`);
});