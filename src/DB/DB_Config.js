import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from '@/constant.js';

dotenv.config();

const DB_Config = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);

        if (!connection) {
            console.log("Connection String is Invalid");
        } else {
            console.log("Connection Successful");
        }

    } catch (error) {
        console.log("There is an error in DB Connection ", error);
    } 
}

export default DB_Config;
