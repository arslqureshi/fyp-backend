import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from '../routes/main.route';

class App {
    public app : any;
    public PORT: any;
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;
        this.initMiddleware();
        this.initRoutes();
    }
    private initMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());
        dotenv.config();
    }
    private initRoutes() {
        this.app.use('/', router);
    }
    public createServer() {
        this.app.listen(this.PORT, () => {
            console.log("Server started at port 3000");
        })
        this.app.get('/', (req,res) => {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Max-Age", "1800");
            res.setHeader("Access-Control-Allow-Headers", "content-type");
            res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
            res.send("hello from server");
        })
    }
}

export default App;