
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/index'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on('error', () => {
    console.log("error occured in Mongo db")
})


app.use('/', router())

app.listen(3000, () => {
    console.log("server started")
})


