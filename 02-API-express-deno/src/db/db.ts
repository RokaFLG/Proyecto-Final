import mongoose from 'npm:mongoose';
import { config } from '/Proyecto Final/02-API-express-deno/src/config/deps';

try {
    await mongoose.connect(config().MONGO_URL);
    console.log('Conectado a Mongo: ', mongoose.connection.name);    
} catch (error) {
    console.log(error);
}