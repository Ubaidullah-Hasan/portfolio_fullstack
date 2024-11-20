import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from "http";

let server: Server;
async function bootstrap() {
    try {
        await mongoose.connect(config.db_url as string);
        console.log('🛢 Database connected successfully');
        server = app.listen(config.port, () => {
            console.log(`🚀 Server is running at http://localhost:${config.port} 🚀 `);
        });
    } catch (err) {
        console.error('Failed to connect to database:', err);
        process.exit(1);
    }
}

bootstrap();


