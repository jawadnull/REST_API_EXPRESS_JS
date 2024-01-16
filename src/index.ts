import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080,()=>{
    console.log("Server running on http://localhost:8080/");
});

const MONGO_URl='mongodb+srv://chrollo997700:OkKHkcm8j7LYirbu@cluster1.vvopfn7.mongodb.net/?retryWrites=true&w=majority';
mongoose.Promise=Promise;
mongoose.connect(MONGO_URl);
mongoose.connection.on('error',(error:Error)=>console.log(error));


app.use('/',router());